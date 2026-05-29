import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';

import { AnonymousConsentTemplatesAdapter } from "@spartacus/core";
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
      useClass: CachingAnonymousConsentTemplatesAdapter,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
