import { Injectable, signal, PLATFORM_ID, inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { Router } from '@angular/router'

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private tokenKey = "userToken";
  private platformId = inject(PLATFORM_ID);
  isAuthenticated = signal(false);
  private router = inject(Router);

  setToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.tokenKey, token);
      this.isAuthenticated.set(true);
    }
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.tokenKey);
      this.isAuthenticated.set(false);
    }
    console.log("Logged Out");
    this.router.navigate(['/auth/login']);
  }

  checkAuth(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = this.getToken();
      if (token) {
        this.isAuthenticated.set(true);
        return true;
      }
    }
    this.isAuthenticated.set(false);
    return false;
  }
}