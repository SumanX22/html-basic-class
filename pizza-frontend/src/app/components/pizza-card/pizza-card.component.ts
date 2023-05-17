import { Component, Input } from '@angular/core';
import Pizza from 'src/app/interface/pizza.interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.css'],
})
export class PizzaCardComponent {
  @Input() pizza: Pizza = {
    name: 'Loading Title...',
    price: 0,
  };

  isAdmin: boolean = false;

  constructor(private AuthService: AuthService) {
    this.isAdmin = AuthService.isAdmin();
  }

  deletePizza() {
    alert('Pizza Deleted');
  }
}
