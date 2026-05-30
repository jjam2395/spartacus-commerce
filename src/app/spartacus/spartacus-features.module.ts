import { NgModule } from '@angular/core';
import { AnonymousConsentsModule, AuthModule, CartModule, CartOccModule, CostCenterOccModule, CmsConfig, ExternalRoutesModule, OrderOccModule, ProductModule, ProductOccModule, UserOccTransitional_4_2_Module, UserTransitional_4_2_Module, provideConfig } from "@spartacus/core";
import { AddressBookModule, AnonymousConsentManagementBannerModule, AnonymousConsentsDialogModule, BannerCarouselModule, BannerModule, BreadcrumbModule, CartComponentModule, CartPageEventModule, CategoryNavigationModule, CmsParagraphModule, ConsentManagementModule, FooterNavigationModule, HamburgerMenuModule, HomePageEventModule, LinkModule, LoginRouteModule, LogoutModule, MyCouponsModule, MyInterestsModule, NavigationEventModule, NavigationModule, NotificationPreferenceModule, PaymentMethodsModule, ProductDetailsPageModule, ProductListingPageModule, ProductPageEventModule, SearchBoxModule, SiteContextSelectorModule, StockNotificationModule, TabParagraphContainerModule, WishListModule } from "@spartacus/storefront";
import { UserFeatureModule } from './features/user/user-feature.module';
import { StoreFinderFeatureModule } from './features/storefinder/store-finder-feature.module';
import { SmartEditFeatureModule } from './features/smartedit/smart-edit-feature.module';
import { ProductVariantsFeatureModule } from './features/product/product-variants-feature.module';
import { ProductImageZoomFeatureModule } from './features/product/product-image-zoom-feature.module';
import { OrderFeatureModule } from './features/order/order-feature.module';
import { CheckoutFeatureModule } from './features/checkout/checkout-feature.module';
import { PRODUCT_CMS_FEATURE, PRODUCT_CMS_CMS_COMPONENTS } from './features/product-cms/product-cms-feature-config';

@NgModule({
  declarations: [],
  imports: [
    // Auth Core
    AuthModule.forRoot(),
    LogoutModule,
    LoginRouteModule,
    // Basic Cms Components
    HamburgerMenuModule,
    SiteContextSelectorModule,
    LinkModule,
    BannerModule,
    CmsParagraphModule,
    TabParagraphContainerModule,
    BannerCarouselModule,
    CategoryNavigationModule,
    NavigationModule,
    FooterNavigationModule,
    BreadcrumbModule,
    // User Core,
    UserTransitional_4_2_Module,
    UserOccTransitional_4_2_Module,
    // User UI,
    AddressBookModule,
    PaymentMethodsModule,
    NotificationPreferenceModule,
    MyInterestsModule,
    StockNotificationModule,
    ConsentManagementModule,
    MyCouponsModule,
    // Anonymous Consents Core,
    AnonymousConsentsModule.forRoot(),
    // Anonymous Consents UI,
    AnonymousConsentsDialogModule,
    AnonymousConsentManagementBannerModule,
    // Product Core,
    ProductModule.forRoot(),
    ProductOccModule,
    // Product UI (route modules - eager),
    ProductDetailsPageModule,
    ProductListingPageModule,
    SearchBoxModule,
    // Product UI (CMS components - lazy via ProductCmsFeatureModule),
    // Cart Core,
    CartModule.forRoot(),
    CartOccModule,
    // Cart UI,
    CartComponentModule,
    WishListModule,
    CostCenterOccModule,
    // Order,
    OrderOccModule,
    // Page Events,
    NavigationEventModule,
    HomePageEventModule,
    CartPageEventModule,
    ProductPageEventModule,
    // External routes,
    ExternalRoutesModule.forRoot(),
    UserFeatureModule,
    StoreFinderFeatureModule,
    SmartEditFeatureModule,
    ProductVariantsFeatureModule,
    ProductImageZoomFeatureModule,
    OrderFeatureModule,
    CheckoutFeatureModule,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      featureModules: {
        [PRODUCT_CMS_FEATURE]: {
          module: () =>
            import('./features/product-cms/product-cms-feature.module').then(
              (m) => m.ProductCmsFeatureModule
            ),
          cmsComponents: PRODUCT_CMS_CMS_COMPONENTS,
        },
      },
    }),
  ],
})
export class SpartacusFeaturesModule { }
