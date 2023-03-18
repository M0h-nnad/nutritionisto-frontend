import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      userType: ['user', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.warn(this.loginForm.value);
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.value, this.loginForm.value.userType)
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
}
