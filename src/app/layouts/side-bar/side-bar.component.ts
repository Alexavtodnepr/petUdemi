import {Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {Router, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [MatButtonModule, RouterModule, CommonModule, MatListItem, MatNavList, MatIcon],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  private router: Router = inject(Router);
  sideBarItems: {name: string; route: string; icon: string;}[] = [
    {name: 'Головна', route: '/', icon: 'home'},
  ]

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }
}
