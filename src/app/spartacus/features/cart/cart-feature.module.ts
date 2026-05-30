import { NgModule } from '@angular/core';
import { CartComponentModule, WishListModule } from '@spartacus/storefront';

/**
 * Lazy-loaded feature module for the cart page and wishlist.
 *
 * Loaded on demand via Spartacus featureModules when the user navigates
 * to the cart page or interacts with wishlist components.
 */
@NgModule({
  imports: [
    CartComponentModule,  // Cart details, totals, coupon, mini-cart
    WishListModule,       // Wishlist page and add-to-wishlist
  ],
})
export class CartFeatureModule { }
