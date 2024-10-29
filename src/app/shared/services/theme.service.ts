import { Injectable, signal } from "@angular/core";
import {ThemeTypes} from "../models/setting-model";

@Injectable({
    providedIn: "root",
})
export class ThemeService {
    themeSignal = signal<string>("dark");

    setTheme(theme: string): void {
        this.themeSignal.set(theme);
    }

    updateTheme(theme: ThemeTypes): void {
        this.themeSignal.update((value) => value = theme);
    }
}