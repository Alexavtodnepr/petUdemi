import {Component, inject} from '@angular/core';
import {ButtonMenuComponent} from "../button-menu/button-menu.component";
import {SettingsService} from "../../shared/services/settings.service";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {BreakpointService} from "../../shared/services/breakpoint.service";
import {CommonModule} from "@angular/common";
import {AuthRegisterComponent} from "../../pages/auth-register/auth-register.component";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        CommonModule,
        ButtonMenuComponent,
        AuthRegisterComponent
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    authService: AuthService = inject(AuthService);
    breakpointService: BreakpointService = inject(BreakpointService);

}
