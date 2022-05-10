import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

const STORAGE_KEY_ADMIN = 'adminemail';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAdmin!: boolean;
  private isLoggedIn: boolean = false;

  adminLoginSubject = new BehaviorSubject<boolean>(false);
  notifyAdminLogin$ = this.adminLoginSubject.asObservable();

  constructor() {
    this.getLoginDetails();
  }

  getLoginDetails(): boolean {
    const key = localStorage.getItem(STORAGE_KEY_ADMIN);
    if (key) {
      this.adminLoginSubject.next(true);
      this.isAdmin = true;
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  getUserDetails(email: string) {
    return {
      email: 'admin@gmail.com',
      password: '@dmin1234',
    };
  }

  login(email: string, password: string): Observable<boolean> {
    const user = this.getUserDetails(email);

    if (user.password === password) {
      this.isAdmin = true;

      localStorage.setItem(STORAGE_KEY_ADMIN, user.email);
      this.adminLoginSubject.next(this.isAdmin);

      this.isLoggedIn = true;
    } else this.isLoggedIn = false;
    return of(this.isLoggedIn);
  }

  logOut(): boolean {
    this.isAdmin = false;
    this.isLoggedIn = false;
    localStorage.removeItem(STORAGE_KEY_ADMIN);
    this.adminLoginSubject.next(this.isLoggedIn);
    return true;
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }
}
