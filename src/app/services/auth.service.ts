import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAdmin!: boolean;
  private isLoggedIn!: boolean;

  constructor() {
    this.isLoggedIn = false;
  }

  getUserDetails(email: string) {
    return {
      email: 'admin@gmail.com',
      password: '@admin1234',
    };
  }

  login(email: string, password: string) {
    const user = this.getUserDetails(email);

    if (user.password === password) {
      this.isAdmin = true;
      this.isLoggedIn = true;
    } else this.isLoggedIn = false;
    return of(this.isLoggedIn);
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }
}
