import { NgModule } from '@angular/core';
import {
  ProductDetailsPageModule,
  ProductListingPageModule,
  ProductListModule,
  ProductFacetNavigationModule,
  ProductImagesModule,
  ProductIntroModule,
  ProductSummaryModule,
  ProductTabsModule,
  ProductCarouselModule,
  ProductReferencesModule,
  StockNotificationModule,
} from '@spartacus/storefront';

/**
 * Lazy-loaded feature module for product pages (PDP + PLP).
 *
 * Loaded on demand via Spartacus featureModules when the first
 * product-related CMS component is encountered (see the config in
 * spartacus-features.module.ts).
 *
 * Each imported storefront module registers its CMS component mapping
 * (e.g. CMSProductListComponent → ProductListComponent) via
 * provideDefaultConfig when this module initializes.
 */
@NgModule({
  imports: [
    // ── Product Detail Page (PDP) ──
    ProductDetailsPageModule,
    ProductImagesModule,
    ProductIntroModule,
    ProductSummaryModule,
    ProductTabsModule,

    // ── Product Listing Page (PLP) ──
    ProductListingPageModule,
    ProductListModule,
    ProductFacetNavigationModule,

    // ── Cross-page product components ──
    ProductCarouselModule,
    ProductReferencesModule,
    StockNotificationModule,
  ],
})
export class ProductFeatureModule { }
