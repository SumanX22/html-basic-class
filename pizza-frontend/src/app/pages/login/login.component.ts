import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private AuthService: AuthService) {}
  logoUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8NkyX2LzkLWIj1pblkv9e17H3X7L6ehsFQ&usqp=CAU';

  login() {
    this.AuthService.login('suman2@gmail.com', 'meow123');
  }
}
