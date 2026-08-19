import { Component, signal } from '@angular/core';
import { Todo } from './todo/todo.component';
@Component({
  selector: 'app-root',
  imports: [Todo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('semana3');
}
