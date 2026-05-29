import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "@spartacus/storefront";
import {
  AnonymousConsentTemplatesAdapter,
  ConverterService,
  OccAnonymousConsentTemplatesAdapter,
  OccEndpointsService,
} from "@spartacus/core";
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { CachingAnonymousConsentTemplatesAdapter } from "./spartacus/adapters/caching-anonymous-consent-templates.adapter";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule
  ],
  providers: [
    {
      provide: AnonymousConsentTemplatesAdapter,
      useFactory: (
        http: HttpClient,
        occEndpoints: OccEndpointsService,
        converter: ConverterService
      ) => {
        const occAdapter = new OccAnonymousConsentTemplatesAdapter(
          http,
          occEndpoints,
          converter
        );
        return new CachingAnonymousConsentTemplatesAdapter(occAdapter);
      },
      deps: [HttpClient, OccEndpointsService, ConverterService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
