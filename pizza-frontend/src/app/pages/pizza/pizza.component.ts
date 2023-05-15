import { Component } from '@angular/core';
import Pizza from 'src/app/interface/pizza.interface';
import { PizzaService } from 'src/app/services/pizza/pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
})
export class PizzaComponent {
  pizzas: Pizza[] = [];

  constructor(private PizzaService: PizzaService) {
    this.PizzaService.get().subscribe((data) => (this.pizzas = data.pizzas));
  }
}
