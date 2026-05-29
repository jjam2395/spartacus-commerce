import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
  AnonymousConsent,
  AnonymousConsentTemplatesAdapter,
  ConsentTemplate,
  OccAnonymousConsentTemplatesAdapter,
} from '@spartacus/core';

/**
 * Production-ready caching decorator for the anonymous consent templates adapter.
 *
 * WHY: Spartacus 4.x polls the consent templates endpoint aggressively (on every
 * route change, context switch, and banner visibility check). This adapter wraps
 * the OCC adapter with an in-memory cache + TTL so the API is called at most
 * once per TTL window instead of dozens of times per page load.
 *
 * PRODUCTION PATTERN: In a real project you could:
 *   - Increase TTL to 30m or 1h
 *   - Persist to localStorage so the cache survives page refreshes
 *   - Invalidate on explicit user actions (e.g., consent dialog submission)
 *   - Use a config-driven TTL via Spartacus config injection
 */
@Injectable({
  providedIn: 'root',
})
export class CachingAnonymousConsentTemplatesAdapter extends AnonymousConsentTemplatesAdapter {
  private templatesCache: ConsentTemplate[] | null = null;
  private consentsCache: AnonymousConsent[] | null = null;
  private templatesCachedAt = 0;
  private consentsCachedAt = 0;

  // Cache TTL: 5 minutes. In production, adjust based on how often
  // consent templates change in your SAP Commerce backend.
  private readonly TTL = 5 * 60 * 1000;

  constructor(private occAdapter: OccAnonymousConsentTemplatesAdapter) {
    super();
  }

  loadAnonymousConsentTemplates(): Observable<ConsentTemplate[]> {
    if (this.templatesCache && this.isFresh(this.templatesCachedAt)) {
      return of(this.templatesCache);
    }
    return this.occAdapter.loadAnonymousConsentTemplates().pipe(
      tap((templates) => {
        this.templatesCache = templates;
        this.templatesCachedAt = Date.now();
      })
    );
  }

  loadAnonymousConsents(): Observable<AnonymousConsent[]> {
    if (this.consentsCache && this.isFresh(this.consentsCachedAt)) {
      return of(this.consentsCache);
    }
    return this.occAdapter.loadAnonymousConsents().pipe(
      tap((consents) => {
        this.consentsCache = consents;
        this.consentsCachedAt = Date.now();
      })
    );
  }

  private isFresh(cachedAt: number): boolean {
    return Date.now() - cachedAt < this.TTL;
  }
}
