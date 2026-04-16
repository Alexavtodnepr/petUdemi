import {Component, inject} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-auth-form',
    imports: [CommonModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
    templateUrl: './auth-form.component.html',
    styleUrl: './auth-form.component.scss'
})
export class AuthFormComponent {
  readonly dialogRef = inject(MatDialogRef<AuthFormComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);
  email: string = '';

  onNoClick() {

  }

  sendForm() {

  }
}
