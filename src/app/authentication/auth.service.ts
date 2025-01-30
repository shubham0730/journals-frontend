import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  private user = {
    name: 'Shubham Shinde',
    email: 'shubhamss0730@gmail.com',
    role: 'Researcher'
  };

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUser() {
    return this.isAuthenticated ? this.user : null;
  }
}
