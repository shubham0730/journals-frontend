import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8081'; // Your Spring Boot API Base URL

  constructor(private http: HttpClient) {}

  // Register User
  register(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.apiUrl}/auth/register`, user, { headers});
  }

  // Login User
  login(credentials: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.apiUrl}/auth/login`, credentials,{ headers});
  }

  logout(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    sessionStorage.clear();
    return this.http.post(`${this.apiUrl}/auth/logout`,{ headers, withCredentials: true });
  }

  storeTokens(accessToken: string, refreshToken: string, isLoggedIn: any,userEmail:string) {
    sessionStorage.setItem('access_token', accessToken);
    sessionStorage.setItem('refresh_token', refreshToken);
    sessionStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    sessionStorage.setItem('userEmail', userEmail);
  }

  getAccessToken(): string | null {
    return sessionStorage.getItem('access_token');
  }

  getRefreshToken(): string | null {
    return sessionStorage.getItem('refresh_token');
  }

}
