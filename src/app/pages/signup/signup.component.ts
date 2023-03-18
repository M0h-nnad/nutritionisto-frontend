import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        gender: ['Male', [Validators.required]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        userType: ['user', Validators.required],
      },
      {
        validator: this.passwordMatchValidator,
      }
    );
  }

  onSubmit() {
    console.info(this.signupForm.value);
    if (this.signupForm.valid) {
      this.authService
        .signup(this.signupForm.value, this.signupForm.value.userType)
        .subscribe({
          next: (res: any) => {
            console.info(res.message);
            this.authService.saveAuthData(res.token);
          },
          error: (error) => {
            this.toastrService.error(error.error.message);
          },
        });
    }
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }
}
