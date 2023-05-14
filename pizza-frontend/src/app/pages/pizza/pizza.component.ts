import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
})
export class PizzaComponent {
  pizzas = Array(10).fill(0);
}
