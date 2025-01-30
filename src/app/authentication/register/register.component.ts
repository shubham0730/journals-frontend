import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name = '';
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    const user = { name: this.name, email: this.email, role: 'User' };
    this.authService.login(); 
    this.router.navigate(['/profile']);
  }

  ngOnInit(): void {
  }

}

