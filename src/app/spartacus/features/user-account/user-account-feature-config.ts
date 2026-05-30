/**
 * CMS component flexType values that belong to user account pages.
 *
 * These components are only rendered on account-management pages
 * (My Account section), so they're safe to lazy-load.
 */
export const USER_ACCOUNT_CMS_COMPONENTS = [
  'AccountAddressBookComponent',
  'AccountPaymentDetailsComponent',
  'ConsentManagementComponent',
  'MyCouponsComponent',
  'CouponClaimComponent',
  'MyInterestsComponent',
  'NotificationPreferenceComponent',
  // Order history (also user-account related)
  'AccountOrderHistoryComponent',
  'AccountOrderDetailsActionsComponent',
  'AccountOrderDetailsItemsComponent',
  'AccountOrderDetailsShippingComponent',
  'AccountOrderDetailsTotalsComponent',
  'AccountReplenishmentHistoryComponent',
  'CancelOrderComponent',
  'CancelOrderConfirmationComponent',
  'ReturnOrderComponent',
  'ReturnOrderConfirmationComponent',
  'ReturnRequestItemsComponent',
  'ReturnRequestOverviewComponent',
  'ReturnRequestTotalsComponent',
  'OrderReturnRequestListComponent',
  // Replenishment
  'ReplenishmentDetailActionsComponent',
  'ReplenishmentDetailItemsComponent',
  'ReplenishmentDetailOrderHistoryComponent',
  'ReplenishmentDetailShippingComponent',
  'ReplenishmentDetailTotalsComponent',
];

export const USER_ACCOUNT_FEATURE = 'userAccountComponents';
