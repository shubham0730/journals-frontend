import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8081/auth'; // Your Spring Boot API Base URL

  constructor(private http: HttpClient) {}

  // Register User
  register(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.apiUrl}/register`, user, { headers});
  }

  // Login User
  login(credentials: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.apiUrl}/login`, credentials,{ headers, withCredentials: true });
  }

  storeTokens(accessToken: string, refreshToken: string) {
    sessionStorage.setItem('access_token', accessToken);
    sessionStorage.setItem('refresh_token', refreshToken);
  }

  getAccessToken(): string | null {
    return sessionStorage.getItem('access_token');
  }

  getRefreshToken(): string | null {
    return sessionStorage.getItem('refresh_token');
  }

  logout() {
    sessionStorage.clear(); // Clear tokens on logout
  }

  uploadPaper(file: File): Observable<any> {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${this.apiUrl}/papers/upload`, formData);
  }
}
