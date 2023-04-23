import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  count = 0;

  users = [{ name: 'UDita' }, { name: 'Suman' }];

  constructor() {}

  increaseCounter() {
    this.count += 1;
  }

  decreaseCounter() {
    this.count -= 1;
  }
}
