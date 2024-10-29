import { Routes } from '@angular/router';
import {SettingsComponent} from './pages/settings/settings.component';
import {MainPageComponent} from './pages/mainPage/main-page.component';

export const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'settings', component: SettingsComponent},
];
