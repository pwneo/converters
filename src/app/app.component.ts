import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menuId = 'main-menu';

  public pages: {
    url: string;
    icon: string;
    text: string;
    direction: 'forward' | 'back' | 'root';
  }[];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.pages = [
      { url: 'home', icon: 'home', text: 'Home', direction: 'root' },
      { url: 'imc', icon: 'flame', text: 'IMC', direction: 'forward' },
      {
        url: '/km-to-mi',
        icon: 'speedometer',
        text: 'Velocidades',
        direction: 'forward',
      },
      {
        url: '/temperatures',
        icon: 'thermometer',
        text: 'Temperaturas',
        direction: 'forward',
      },
    ];

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
