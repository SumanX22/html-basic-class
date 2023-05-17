import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;

  constructor(private AuthService: AuthService) {
    this.isAuthenticated = AuthService.isAuthenticated();
    this.isAdmin = AuthService.isAdmin();
  }

  logout() {
    this.AuthService.logout();
  }

  logoUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8NkyX2LzkLWIj1pblkv9e17H3X7L6ehsFQ&usqp=CAU';
}
