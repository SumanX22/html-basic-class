import { Component, Input } from '@angular/core';
import Pizza from 'src/app/interface/pizza.interface';

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

  isAdmin = false;

  deletePizza() {
    alert('Pizza Deleted');
  }
}
