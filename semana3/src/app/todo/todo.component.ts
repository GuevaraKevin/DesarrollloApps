import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class Todo {
  newTask = '';
  tasks: string[] = [];

  add() {
    const t = this.newTask.trim();
    if (!t) return;
    this.tasks.push(t);
    this.newTask = '';
  }

  remove(index: number) {
    this.tasks.splice(index, 1);
  }
}
