import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators, FormControl, AbstractControl } from '@angular/forms'
import { RouterLink, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../app/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerError: string = '';
  registerSuccess: string = '';
  isLoading: boolean = false;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required]),
    last_name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    role: new FormControl('buyer', [Validators.required]) // Default to 'buyer'
  })

  registerSubmit() {
    this.registerError = '';
    this.registerSuccess = '';

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    const userData = this.registerForm.value;

    this.http
      .post<{ user: any }>(
        'http://laravel-pc-parts.test/api/users',
        userData
      )
      .subscribe({
        next: (response) => {
          this.isLoading = false;
          this.registerSuccess = 'Account created successfully! Redirecting to login...';
          console.log('Registration Successful', response);
          
          // Redirect to login after 2 seconds
          setTimeout(() => {
            this.router.navigate(['/auth/login']);
          }, 2000);
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Registration Failed', err);
          
          // Set appropriate error message based on the error response
          if (err.status === 422) {
            // Handle Laravel validation errors
            if (err.error.errors?.email) {
              this.registerError = err.error.errors.email[0];
            } else if (err.error.errors?.password) {
              this.registerError = err.error.errors.password[0];
            } else if (err.error.errors?.first_name) {
              this.registerError = err.error.errors.first_name[0];
            } else if (err.error.errors?.last_name) {
              this.registerError = err.error.errors.last_name[0];
            } else if (err.error.errors?.role) {
              this.registerError = err.error.errors.role[0];
            } else {
              this.registerError = 'Please check your information and try again.';
            }
          } else if (err.status === 409) {
            this.registerError = 'An account with this email already exists.';
          }
        },
      });
  }
}