import { NgModule } from '@angular/core';
import {
  AddressBookModule,
  ConsentManagementModule,
  MyCouponsModule,
  MyInterestsModule,
  NotificationPreferenceModule,
  PaymentMethodsModule,
} from '@spartacus/storefront';

/**
 * Lazy-loaded feature module for user account pages.
 *
 * Loaded on demand when the user visits My Account sections
 * (address book, payment methods, order history, etc.).
 */
@NgModule({
  imports: [
    AddressBookModule,
    PaymentMethodsModule,
    NotificationPreferenceModule,
    MyInterestsModule,
    ConsentManagementModule,
    MyCouponsModule,
  ],
})
export class UserAccountFeatureModule { }
