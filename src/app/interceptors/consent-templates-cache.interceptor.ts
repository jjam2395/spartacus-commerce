import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

/**
 * HTTP interceptor that caches GET/HEAD requests to consenttemplates endpoints.
 *
 * WHY: Spartacus 4.x polls consent templates aggressively (on every route change,
 * banner check, context switch). This interceptor catches ALL requests to
 * consenttemplates at the HTTP level — both anonymous AND authenticated — and
 * caches the response for the configured TTL.
 *
 * Unlike the adapter-based approach, this:
 *   - Works for BOTH AnonymousConsentTemplatesAdapter AND UserConsentAdapter
 *   - Doesn't depend on complex Angular DI resolution
 *   - Caches the full HTTP response, not just the deserialized data
 */
@Injectable()
export class ConsentTemplatesCacheInterceptor implements HttpInterceptor {
  private cache = new Map<
    string,
    {
      response: Observable<HttpEvent<unknown>>;
      cachedAt: number;
    }
  >();

  // Cache TTL: 5 minutes
  private readonly TTL = 5 * 60 * 1000;

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Only intercept GET and HEAD requests to consenttemplates
    if (
      (req.method !== 'GET' && req.method !== 'HEAD') ||
      !req.url.includes('consenttemplates')
    ) {
      return next.handle(req);
    }

    const cacheKey = `${req.method}:${req.urlWithParams}`;
    const cached = this.cache.get(cacheKey);

    if (cached && Date.now() - cached.cachedAt < this.TTL) {
      console.log(
        `[ConsentTemplatesCache] HIT: ${req.url} (cached ${Math.round(
          (Date.now() - cached.cachedAt) / 1000
        )}s ago)`
      );
      return cached.response;
    }

    console.log(`[ConsentTemplatesCache] MISS: ${req.url} — fetching from API`);

    // Make the actual request and cache it
    const response$ = next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse && event.ok) {
          console.log(
            `[ConsentTemplatesCache] CACHED: ${req.url}`
          );
        }
      }),
      shareReplay(1)
    );

    this.cache.set(cacheKey, {
      response: response$,
      cachedAt: Date.now(),
    });

    return response$;
  }
}
