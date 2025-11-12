import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private tokenKey = "userToken";
  isAuthenticated = signal(false);

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.isAuthenticated.set(true);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  logout(): void {
    console.log("Logged Out");
  }

  checkAuth(): boolean {
    const token = this.getToken();
    if (token) {
      this.isAuthenticated.set(true);
      return true;
    }
    return false;
  }
}
