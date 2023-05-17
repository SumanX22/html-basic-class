import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH_LOGIN_URL } from 'src/app/config/api.config';
import User from 'src/app/interface/login.interface';

export interface LoginRes {
  message: string;
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  async login(email: string, password: string) {
    this.http
      .post<LoginRes>(AUTH_LOGIN_URL, {
        email: email,
        password: password,
      })
      .subscribe((loginRes) => {
        console.log('loginRes.message');

        if (loginRes.token != null) {
          const isAuthenticated = true;
          const isAdmin = loginRes.user.role == 'ADMIN';

          localStorage.setItem('isAuthenticated', `${isAuthenticated}`);
          localStorage.setItem('isAdmin', `${isAdmin}`);

          this.router.navigate(['/pizza']).then(() => window.location.reload());
        }
      });
  }

  register() {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/']).then(() => window.location.reload());
  }

  isAdmin() {
    const isAdmin = localStorage.getItem('isAdmin') == 'true';
    return isAdmin;
  }

  isAuthenticated() {
    const isAuthenticated = localStorage.getItem('isAuthenticated') == 'true';
    return isAuthenticated;
  }
}
