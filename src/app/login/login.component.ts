import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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
        console.log('Login successful:', response);
        localStorage.setItem('token', response.access_token); // Store JWT token
        this.router.navigate(['/']); // Redirect to home screen
      },
      (error) => {
        console.error('Login failed:', error);
        alert('Invalid email or password');
      }
    );
  }  
}
