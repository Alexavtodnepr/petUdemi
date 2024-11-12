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

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.component.html',
  styleUrl: 'settings.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatCheckbox, MatDivider, MatSlideToggle],
})
export class SettingsComponent implements OnInit{
  settingService: SettingsService = inject(SettingsService);

  theme!: ThemeTypes;
  isHideFooter!: boolean;
  settings!: SettingModel;

  themes: {value: ThemeTypes; viewValue: string}[] = [
    {value: 'dark', viewValue: 'Темна'},
    // {value: 'light', viewValue: 'Світла'},
    // {value: 'blue', viewValue: 'Синя'},
    // {value: 'pink', viewValue: 'Рожева'},
  ];

  ngOnInit(): void {
    this.settings = JSON.parse(localStorage.getItem('appSetting')!);
    this.theme = this.settings && this.settings.theme? this.settings.theme : 'dark';
    this.isHideFooter = this.settings && this.settings.isHideFooter? this.settings.isHideFooter : false;
  }

  changeTheme(event: MatSelectChange): void {
    localStorage.setItem('appSetting', JSON.stringify({...this.settings, theme: event.value}));
    this.settingService.updateTheme(event.value);
  }

  changeTogleFooterState(event: MatSlideToggleChange) {
    this.isHideFooter = event.checked;
    localStorage.setItem('appSetting', JSON.stringify({...this.settings, isHideFooter: event.checked}));
    this.settingService.updateFooter(event.checked);
  }
}
