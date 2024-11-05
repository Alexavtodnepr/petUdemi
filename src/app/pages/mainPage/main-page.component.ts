import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIcon} from "@angular/material/icon";
import {MatButtonModule, MatFabButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-main-page',
  templateUrl: 'main-page.component.html',
  styleUrl: 'main-page.component.scss',
  standalone: true,
  imports: [CommonModule, MatIcon, MatButtonModule, MatDivider],
})
export class MainPageComponent {
}
