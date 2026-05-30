/**
 * CMS component flexType values for pure CMS components on product pages.
 *
 * These components are only rendered inside CMS page slots — they do NOT
 * register Angular routes. The route modules (ProductDetailsPageModule,
 * ProductListingPageModule) remain eager and provide the URL routing;
 * when a CMS page resolves with these components, Spartacus triggers
 * the lazy feature load.
 */
export const PRODUCT_CMS_CMS_COMPONENTS = [
  // Product Listing Page components
  'CMSProductListComponent',
  'ProductGridComponent',
  'SearchResultsListComponent',
  'ProductRefinementComponent',

  // Product Detail Page non-route components
  'ProductImagesComponent',
  'ProductIntroComponent',
  'ProductSummaryComponent',
  'ProductDetailsTabComponent',
  'ProductSpecsTabComponent',
  'ProductReviewsTabComponent',
  'RotatingImagesComponent',
  'SaveForLaterComponent',

  // Cross-page product widgets
  'ProductCarouselComponent',
  'ProductReferencesComponent',
  'StockNotificationComponent',
];

export const PRODUCT_CMS_FEATURE = 'productCmsComponents';
