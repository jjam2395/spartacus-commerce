import { NgModule } from '@angular/core';
import { AnonymousConsentsModule, AuthModule, CartModule, CartOccModule, CostCenterOccModule, CmsConfig, ExternalRoutesModule, OrderOccModule, ProductModule, ProductOccModule, UserOccTransitional_4_2_Module, UserTransitional_4_2_Module, provideConfig } from "@spartacus/core";
import { AnonymousConsentManagementBannerModule, AnonymousConsentsDialogModule, BannerCarouselModule, BannerModule, BreadcrumbModule, CartPageEventModule, CategoryNavigationModule, CmsParagraphModule, FooterNavigationModule, HamburgerMenuModule, HomePageEventModule, LinkModule, LoginRouteModule, LogoutModule, NavigationEventModule, NavigationModule, ProductPageEventModule, SearchBoxModule, SiteContextSelectorModule, TabParagraphContainerModule } from "@spartacus/storefront";
import { UserFeatureModule } from './features/user/user-feature.module';
import { StoreFinderFeatureModule } from './features/storefinder/store-finder-feature.module';
import { SmartEditFeatureModule } from './features/smartedit/smart-edit-feature.module';
import { ProductVariantsFeatureModule } from './features/product/product-variants-feature.module';
import { ProductImageZoomFeatureModule } from './features/product/product-image-zoom-feature.module';
import { OrderFeatureModule } from './features/order/order-feature.module';
import { CheckoutFeatureModule } from './features/checkout/checkout-feature.module';
import { PRODUCT_FEATURE, PRODUCT_CMS_COMPONENTS } from './features/product/product-feature-config';
import { CART_FEATURE, CART_CMS_COMPONENTS } from './features/cart/cart-feature-config';
import { USER_ACCOUNT_FEATURE, USER_ACCOUNT_CMS_COMPONENTS } from './features/user-account/user-account-feature-config';

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
    // User UI — lazy-loaded via UserAccountFeatureModule,
    // Anonymous Consents Core,
    AnonymousConsentsModule.forRoot(),
    // Anonymous Consents UI,
    AnonymousConsentsDialogModule,
    AnonymousConsentManagementBannerModule,
    // Product Core,
    ProductModule.forRoot(),
    ProductOccModule,
    // Product UI — lazy-loaded via ProductFeatureModule,
    // Cart Core,
    CartModule.forRoot(),
    CartOccModule,
    // Cart UI — lazy-loaded via CartFeatureModule,
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
        [PRODUCT_FEATURE]: {
          module: () =>
            import('./features/product/product-feature.module').then(
              (m) => m.ProductFeatureModule
            ),
          cmsComponents: PRODUCT_CMS_COMPONENTS,
        },
        [CART_FEATURE]: {
          module: () =>
            import('./features/cart/cart-feature.module').then(
              (m) => m.CartFeatureModule
            ),
          cmsComponents: CART_CMS_COMPONENTS,
        },
        [USER_ACCOUNT_FEATURE]: {
          module: () =>
            import('./features/user-account/user-account-feature.module').then(
              (m) => m.UserAccountFeatureModule
            ),
          cmsComponents: USER_ACCOUNT_CMS_COMPONENTS,
        },
      },
    }),
  ],
})
export class SpartacusFeaturesModule { }
