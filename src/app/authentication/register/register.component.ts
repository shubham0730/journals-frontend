import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username = '';
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  postalCode = '';
  role = ''; // Default empty role

  roles = ['ADMIN', 'EDITOR', 'REVIEWER', 'AUTHOR']; // Dropdown options

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    if (!this.role) {
      alert('Please select a role.');
      return;
    }

    const user = {
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      postalCode: this.postalCode,
      role: this.role.toUpperCase() // Ensuring uppercase role
    };

    this.authService.register(user).subscribe(
      (response) => {
        this.router.navigate(['/login']); // Redirect to login upon success
      },
      (error) => {
        console.error('Registration failed:', error);
        alert('Registration failed. Please try again.');
      }
    );
  }

  ngOnInit(): void {}
}
