import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideBarComponent} from "./layouts/side-bar/side-bar.component";
import {HeaderComponent} from "./layouts/header/header.component";
import {FooterComponent} from "./layouts/footer/footer.component";
import {CommonModule} from '@angular/common';
import {SettingModel} from './shared/models/setting-model';
import {defaultSettings} from './shared/mocks/default-settings';
import {SettingsService} from "./shared/services/settings.service";
import {ButtonMenuComponent} from "./layouts/button-menu/button-menu.component";
import {BreakpointService} from "./shared/services/breakpoint.service";
import {AuthService} from "./shared/services/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SideBarComponent, HeaderComponent, FooterComponent, ButtonMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  settingService: SettingsService = inject(SettingsService);
  breakpointService: BreakpointService = inject(BreakpointService);
  authService: AuthService = inject(AuthService);
  isHideFooter: boolean = true;
  title = 'petUdemi';

  ngOnInit(): void {
    const userLanguages: readonly string[] = navigator.languages;
    console.log(userLanguages);
    this.setTheme();
  }

  setTheme(): void {
    const settings: SettingModel = JSON.parse(localStorage.getItem('appSetting')!);
    if(settings && settings.theme){
      this.settingService.setTheme(settings.theme);
      this.settingService.updateFooter(settings.isHideFooter);
    }else{
      this.settingService.setTheme('dark');
      this.settingService.updateFooter(true);
    }
  }
}
