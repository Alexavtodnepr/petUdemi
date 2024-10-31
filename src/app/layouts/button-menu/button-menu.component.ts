import {Component, inject} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {BreakpointService} from "../../shared/services/breakpoint.service";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {SettingsService} from "../../shared/services/settings.service";
import {menuItems} from "../../shared/mocks/menu";
import {MenuItemsInterface} from "../../shared/models/menu-items.interface";
import {Router, RouterModule} from "@angular/router";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
    selector: 'app-button-menu',
    standalone: true,
    imports: [
        MatIcon,
        MatMiniFabButton,
        MatIconButton,
        MatMenu,
        MatMenuItem,
        MatMenuTrigger,
        RouterModule,
        MatTooltip
    ],
    templateUrl: './button-menu.component.html',
    styleUrl: './button-menu.component.scss'
})
export class ButtonMenuComponent {
    breakpointService: BreakpointService = inject(BreakpointService);
    private router: Router = inject(Router);
    settingService: SettingsService = inject(SettingsService);
    isCollapsedSideBar: boolean = false;
    mobileMenuItems: MenuItemsInterface[] = menuItems;

    updateSidebar() {
        this.isCollapsedSideBar = !this.isCollapsedSideBar;
        this.settingService.updateSidebar(this.isCollapsedSideBar);
    }

    isActiveRoute(route: string): boolean {
        return this.router.url === route;
    }
}
