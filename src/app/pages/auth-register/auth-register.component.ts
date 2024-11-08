import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatOption, MatSelect, MatSelectChange, MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {SettingModel, ThemeTypes} from "../../shared/models/setting-model";
import {SettingsService} from "../../shared/services/settings.service";
import {MatCheckbox, MatCheckboxChange} from "@angular/material/checkbox";
import {MatDivider} from "@angular/material/divider";
import {MatSlideToggle, MatSlideToggleChange} from "@angular/material/slide-toggle";
import {AuthService} from "../../shared/services/auth.service";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-auth-register',
  templateUrl: 'auth-register.component.html',
  styleUrl: 'auth-register.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatCheckbox, MatDivider, MatSlideToggle, MatIcon],
})
export class AuthRegisterComponent implements OnInit{
  authService: AuthService = inject(AuthService);
  isAuthenticated: boolean = false;

  ngOnInit(): void {
  }

  login() {
    this.authService.logIn(true);
  }
}
