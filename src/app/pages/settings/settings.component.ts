import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatOption, MatSelect, MatSelectChange, MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {SettingModel, ThemeTypes} from "../../shared/models/setting-model";
import {SettingsService} from "../../shared/services/settings.service";

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.component.html',
  styleUrl: 'settings.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule],
})
export class SettingsComponent implements OnInit{
  settingService: SettingsService = inject(SettingsService);

  theme!: ThemeTypes;
  settings!: SettingModel;

  themes: {value: ThemeTypes; viewValue: string}[] = [
    {value: 'dark', viewValue: 'Темна'},
    {value: 'light', viewValue: 'Світла'},
    {value: 'blue', viewValue: 'Синя'},
    {value: 'pink', viewValue: 'Рожева'},
  ];

  ngOnInit(): void {
    this.settings = JSON.parse(localStorage.getItem('appSetting')!);
    this.theme = this.settings && this.settings.theme? this.settings.theme : 'dark';
  }

  changeTheme(event: MatSelectChange): void {
    localStorage.setItem('appSetting', JSON.stringify({...this.settings, theme: event.value}));
    this.settingService.updateTheme(event.value);
  }
}
