/**
 * CMS component flexType values that belong to product pages (PDP + PLP).
 *
 * When Spartacus encounters any of these CMS components in a page
 * response from the backend, it triggers lazy loading of the
 * ProductFeatureModule.
 *
 * These values match the flexType strings returned by the SAP Commerce
 * backend for the electronics-spa base site.
 */
export const PRODUCT_CMS_COMPONENTS = [
  // Product Detail Page
  'ProductAddToCartComponent',
  'ProductImagesComponent',
  'ProductIntroComponent',
  'ProductSummaryComponent',
  'ProductDetailsTabComponent',
  'ProductSpecsTabComponent',
  'ProductReviewsTabComponent',
  'RotatingImagesComponent',
  'SaveForLaterComponent',

  // Product Listing Page
  'CMSProductListComponent',
  'ProductGridComponent',
  'SearchResultsListComponent',
  'ProductRefinementComponent',

  // Cross-page product widgets
  'ProductCarouselComponent',
  'ProductReferencesComponent',
  'StockNotificationComponent',
];

export const PRODUCT_FEATURE = 'productComponents';
