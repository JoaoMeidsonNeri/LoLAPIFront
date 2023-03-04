import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  public userData = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    checkEmail: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    agreement: new FormControl(false, Validators.required),
  });
}
