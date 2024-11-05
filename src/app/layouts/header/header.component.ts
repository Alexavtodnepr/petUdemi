import {Component, inject} from '@angular/core';
import {ButtonMenuComponent} from "../button-menu/button-menu.component";
import {SettingsService} from "../../shared/services/settings.service";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {BreakpointService} from "../../shared/services/breakpoint.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    ButtonMenuComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  breakpointService: BreakpointService = inject(BreakpointService);

}
