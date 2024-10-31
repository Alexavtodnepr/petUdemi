import { Injectable, signal } from "@angular/core";
import {ThemeTypes} from "../models/setting-model";

@Injectable({
    providedIn: "root",
})
export class SettingsService {
    themeSignal = signal<string>("dark");
    isCollapsedMenu = signal<boolean>(false);

    updateSidebar(state: boolean){
        this.isCollapsedMenu.update((value) => value = state)
    }

    setTheme(theme: string): void {
        this.themeSignal.set(theme);
    }

    updateTheme(theme: ThemeTypes): void {
        this.themeSignal.update((value) => value = theme);
    }
}