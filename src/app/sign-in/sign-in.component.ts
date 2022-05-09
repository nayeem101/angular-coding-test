import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  emailControl!: AbstractControl;
  passwordControl!: AbstractControl;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    //sign in form builder
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.emailControl = this.signInForm.get('email') as AbstractControl;
    this.passwordControl = this.signInForm.get('password') as AbstractControl;
  }

  getErrorMessage(field: string) {
    if (field === 'email') {
      return this.emailControl?.hasError('email') ? 'Not a valid email' : '';
    } else if (field === 'password') {
      return this.passwordControl?.hasError('minlength')
        ? 'Password Must be at least 8 characters long'
        : '';
    }
    return 'Please enter a value';
  }

  onSignIn() {
    const email = this.signInForm.value.email;
    const password = this.signInForm.value.password;
    this.authService.login(email, password).subscribe((res) => {
      console.log(res);
      if (res) {
        this.router.navigate(['/admin']);
      }
      this._snackBar.open('Authentication Failed! try again.', 'Okay', {
        duration: 1000,
      });
    });
  }
}
