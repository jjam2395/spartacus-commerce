import { NgModule } from '@angular/core';
import {
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
 * Lazy-loaded feature module for pure product CMS components.
 *
 * ⚠  Does NOT include route-registering modules
 *    (ProductDetailsPageModule, ProductListingPageModule) —
 *    those stay eager so Angular Router resolves PDP/PLP URLs
 *    at bootstrap time.
 *
 * When the CMS page response contains components matching the
 * flexTypes in PRODUCT_CMS_CMS_COMPONENTS, Spartacus loads this
 * module on demand and renders the components.
 */
@NgModule({
  imports: [
    // PLP components
    ProductListModule,
    ProductFacetNavigationModule,

    // PDP components
    ProductImagesModule,
    ProductIntroModule,
    ProductSummaryModule,
    ProductTabsModule,

    // Cross-page
    ProductCarouselModule,
    ProductReferencesModule,
    StockNotificationModule,
  ],
})
export class ProductCmsFeatureModule {}
