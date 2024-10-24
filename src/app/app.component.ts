import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideBarComponent} from "./layouts/side-bar/side-bar.component";
import {HeaderComponent} from "./layouts/header/header.component";
import {FooterComponent} from "./layouts/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideBarComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'petUdemi';

  ngOnInit(){
    const userLanguages: readonly string[] = navigator.languages;
    console.log(userLanguages)
  }
}
