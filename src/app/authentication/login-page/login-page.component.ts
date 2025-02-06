import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    const user = { email: this.email, role: 'User' }; 
    this.authService.login();
    
  }

}
