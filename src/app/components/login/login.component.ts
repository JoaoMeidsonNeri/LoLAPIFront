import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginData = new FormGroup({
    // TODO validate empty spaces
    user: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  public canLogin(): boolean {
    return this.loginData.valid;
  }

  public sendLoginRequest(): void {
    console.log('sending login request');
  }

  public signUpClick(): void {
    console.log('going to sign up page');
  }
}
