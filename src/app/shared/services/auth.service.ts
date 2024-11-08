import { Injectable, signal } from "@angular/core";
import {ThemeTypes} from "../models/setting-model";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    isAuth = signal<boolean>(false);

    logIn(state: boolean){
        this.isAuth.update((value) => value = state);
    }

    logOut(){
        this.isAuth.update((value) => value = false);
    }
}