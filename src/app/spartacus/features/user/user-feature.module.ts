import { NgModule } from '@angular/core';
import { CmsConfig, I18nConfig, provideConfig } from "@spartacus/core";
import { userAccountTranslationChunksConfig, userAccountTranslations } from "@spartacus/user/account/assets";
import { UserAccountRootModule, USER_ACCOUNT_FEATURE } from "@spartacus/user/account/root";

@NgModule({
  declarations: [],
  imports: [
    UserAccountRootModule
  ],
  providers: [provideConfig(<CmsConfig>{
    featureModules: {
      [USER_ACCOUNT_FEATURE]: {
        module: () =>
          import('@spartacus/user/account').then((m) => m.UserAccountModule),
      },
    }
  }),
  provideConfig(<I18nConfig>{
    i18n: {
      resources: userAccountTranslations,
      chunks: userAccountTranslationChunksConfig,
    },
  })
  ]
})
export class UserFeatureModule { }
