import {inject, Injectable, signal} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment";
import {Observable} from "rxjs";
import {AuthResponse} from "../../pages/auth-register/auth-register.component";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    isAuth = signal<boolean>(false);
    private http: HttpClient = inject(HttpClient);

    allowLogIn(state: boolean){
        this.isAuth.update((value) => value = state);
    }

    logOut(){
        this.isAuth.update((value) => value = false);
    }

    logIn(data: any){
        return this.http.post(environment.developmentUrl + 'Auth/login', {username: 'admin', password: 'password'});
    }

    checkSession(sid: string): Observable<AuthResponse> {
        console.log('checkSession вызван');
        return this.http.post<AuthResponse>(environment.developmentUrl + 'Auth/checkSid', {sid: sid && sid.length ? sid.toString() : ''});
    }

    logedIn(successResponce: any){
        this.allowLogIn(true);
        localStorage.setItem('appSId',JSON.stringify(successResponce.sid))
    }
}