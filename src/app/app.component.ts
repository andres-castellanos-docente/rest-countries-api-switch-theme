import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  darkMode: boolean;
  title = 'rest-countries-api-switch-theme';

  getDarkMode(): boolean {
    return this.darkMode;
  }

  set setDarkMode(darkMod: boolean) {
    this.darkMode = darkMod;
  }
}
