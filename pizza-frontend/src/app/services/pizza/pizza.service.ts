import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PIZZA_URL } from '../../config/api.config';
import Pizza from 'src/app/interface/pizza.interface';

export interface PizzaRes {
  message: string;
  pizzas: Pizza[];
}

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<PizzaRes>(PIZZA_URL);
  }
}
