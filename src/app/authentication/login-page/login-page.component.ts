import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginComponent implements OnInit {
  userEmail = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    const credentials = { userEmail: this.userEmail, password: this.password };
  
    this.authService.login(credentials).subscribe(
      (response) => {
        this.authService.storeTokens(response.access_token, response.refresh_token);
        this.router.navigate(['/']); // Redirect to home screen
      },
      (error) => {
        console.error('Login failed:', error);
        alert('Invalid email or password');
      }
    );
  }  
}
