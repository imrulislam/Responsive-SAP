import { Component } from '@angular/core';
import { FrameworkConfigSettings, FrameworkConfigService } from '../fw/services/framework-config.service';
import { MenuService } from '../fw/services/menu.service';
import { initialMenuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private frameWorkConfigService: FrameworkConfigService,
    private menuService: MenuService
  ) {
    const config: FrameworkConfigSettings = {
      socialIcons: [
        {
          imageFile: 'assets/fb.png',
          alt: 'Facebook',
          link: 'http://www.facebook.com'
        },
        {
          imageFile: 'assets/google.png',
          alt: 'Facebook',
          link: 'http://www.google.com'
        },
        {
          imageFile: 'assets/tw.png',
          alt: 'Facebook',
          link: 'http://www.twitter.com'
        }
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };
    frameWorkConfigService.configure(config);

    menuService.items = initialMenuItems;
  }
}
