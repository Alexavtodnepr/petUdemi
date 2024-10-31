import {Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {Router, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {SettingsService} from "../../shared/services/settings.service";
import {MenuItemsInterface} from "../../shared/models/menu-items.interface";
import {menuItems} from "../../shared/mocks/menu";
import {MatTooltip} from "@angular/material/tooltip";
import {ButtonMenuComponent} from "../button-menu/button-menu.component";

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [MatButtonModule, RouterModule, CommonModule, MatListItem, MatNavList, MatIcon, MatTooltip, ButtonMenuComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  private router: Router = inject(Router);
  settingService: SettingsService = inject(SettingsService);
  sideBarItems: MenuItemsInterface[] = menuItems;

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }
}
