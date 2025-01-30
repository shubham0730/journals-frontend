import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const user = { email: this.email, role: 'User' }; 
    this.authService.login();
    
  }

  ngOnInit(): void {
  }

}
