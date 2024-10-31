import { Injectable, signal } from "@angular/core";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Injectable({
    providedIn: "root",
})
export class BreakpointService {
    isHandset = signal(false);
    isTablet = signal(false);
    isWeb = signal(false);

    constructor(private breakpointObserver: BreakpointObserver) {
        this.initializeBreakpoints();
    }

    private initializeBreakpoints() {
        this.breakpointObserver.observe([
            '(max-width: 599.98px) and (orientation: portrait)',
            '(max-width: 959.98px) and (orientation: landscape)',
            '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)',
            '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)',
            '(min-width: 840px) and (orientation: portrait)',
            '(min-width: 1280px) and (orientation: landscape)'
        ]).subscribe(result => {
            // Обновляем сигналы на основе кастомных условий
            this.isHandset.set(result.breakpoints['(max-width: 599.98px) and (orientation: portrait)'] || result.breakpoints['(max-width: 959.98px) and (orientation: landscape)']);
            this.isTablet.set(result.breakpoints['(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)'] || result.breakpoints['(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)']);
            this.isWeb.set(result.breakpoints['(min-width: 840px) and (orientation: portrait)'] || result.breakpoints['(min-width: 1280px) and (orientation: landscape)']);
        });
    }
}