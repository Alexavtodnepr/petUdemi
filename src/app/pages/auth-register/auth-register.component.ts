import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatOption, MatSelect, MatSelectChange, MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatDivider} from "@angular/material/divider";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {AuthService} from "../../shared/services/auth.service";
import {MatIcon} from "@angular/material/icon";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

@Component({
  selector: 'app-auth-register',
  templateUrl: 'auth-register.component.html',
  styleUrl: 'auth-register.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatCheckbox, MatDivider, MatSlideToggle, MatIcon],
})
export class AuthRegisterComponent implements OnInit{
  private _snackBar = inject(MatSnackBar);
  private language: 'en' | 'uk' = 'uk';
  authService: AuthService = inject(AuthService);
  isAuthenticated: boolean = false;
  sid: string = '';

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ngOnInit(): void {
    this.sid = JSON.parse(localStorage.getItem('appSId')!);
      this.authService.checkSession(this.sid).subscribe({
        next: (res: AuthResponse) => {
          console.log(res);
          this.openSnackBar(AuthMessageTypeConfig[res.messageType][this.language]);
          if(res.messageType === 2 && res.sid) this.authService.allowLogIn(true);
        },
        error: (error) => {
          console.log(error);
          this.openSnackBar('Server error ' + error.message);
        }
      });
  }

  login() {
    this.authService.logIn({username: 'admin', password: 'password'}).subscribe((res: any) => {
      console.log(res)
      // this.authService.allowLogIn(true);
      if(res.messageType === 3) {
        this.authService.logedIn(res);
        this.openSnackBar('З поверненням');
      }
    })
  }

  openSnackBar(text: string) {
    console.log('snack bar opened')
    this._snackBar.open(text, 'Ok', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}


export const AuthMessageTypeConfig = [
  {
    en: 'This is your first time on this device, reauthorization/registration',
    uk: 'Ви перший раз на цьому пристрої, потрібна авторизація/реєстрація'
  },{
    en: 'The authorization token has expired, log in again',
    uk: 'Токен авторизації прострокован, зайдіть заново'
  },{
    en: 'You are successfully logged in',
    uk: 'Ви успішно авторизовані'
  },{
    en: '3The authorization token has expired, log in again',
    uk: '3Токен авторизації прострокован, зайдіть заново'
  },
]

export interface AuthResponse {
  message: string;
  messageType: number;
  sid: string
}