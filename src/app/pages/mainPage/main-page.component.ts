import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIcon} from "@angular/material/icon";
import {MatButtonModule, MatFabButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";

@Component({
  selector: 'app-main-page',
  templateUrl: 'main-page.component.html',
  styleUrl: 'main-page.component.scss',
  standalone: true,
  imports: [CommonModule, MatIcon, MatButtonModule, MatDivider, MatCardActions, MatCardContent, MatCardSubtitle, MatCardTitle, MatCardHeader, MatCard],
})
export class MainPageComponent {
}
