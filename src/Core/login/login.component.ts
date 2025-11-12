import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../app/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  
})
export class LoginComponent {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(3)])
  });

  loginSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const credentials = this.loginForm.value;

    this.http.post<{ token: string }>('http://laravel-pc-parts.test/api/login', credentials).subscribe({
      next: (response) => {
        this.authService.setToken(response.token);
        console.log('Login Successful, Token stored');
        this.router.navigate(['']);  
      },
      error: (err) => {
        console.error('Login Failed', err);
      }
    });
  }
}