import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isLoggedIn:any;
  user: any;

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn = sessionStorage.getItem('isLoggedIn');
    this.user = sessionStorage.getItem('userEmail');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
      
  }

}
