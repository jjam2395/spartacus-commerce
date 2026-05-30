import { Component } from '@angular/core';
import { APP_VERSION, APP_BRANCH, APP_DATE } from '../environments/version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spartacus-commerce';

  constructor() {
    console.log(
      `%c⚡ Spartacus Commerce v${APP_VERSION} | branch: ${APP_BRANCH} %c${APP_DATE}%c`,
      'background:#1a1a2e;color:#e94560;font-weight:bold;padding:4px 8px;border-radius:3px 0 0 3px;font-size:13px',
      'background:#e94560;color:#fff;padding:4px 8px;border-radius:0 3px 3px 0;font-size:12px',
      ''
    );
  }
}
