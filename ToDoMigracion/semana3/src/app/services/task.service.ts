import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Task } from '../models/task.model';

const STORAGE_KEY = 'semana3-tasks';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly browser = isPlatformBrowser(this.platformId);
  readonly tasks = signal<Task[]>(this.loadTasks());

  add(title: string): void {
    const task: Task = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };

    if (!task.title) {
      return;
    }

    this.tasks.update((tasks) => [...tasks, task]);
    this.persist();
  }

  update(id: number, title: string): void {
    const cleanTitle = title.trim();
    if (!cleanTitle) {
      return;
    }

    this.tasks.update((tasks) =>
      tasks.map((task) => task.id === id ? { ...task, title: cleanTitle } : task)
    );
    this.persist();
  }

  toggle(id: number): void {
    this.tasks.update((tasks) =>
      tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task)
    );
    this.persist();
  }

  remove(id: number): void {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
    this.persist();
  }

  getById(id: number): Task | undefined {
    return this.tasks().find((task) => task.id === id);
  }

  private loadTasks(): Task[] {
    if (!this.browser) {
      return [];
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) as Task[] : [];
    } catch {
      return [];
    }
  }

  private persist(): void {
    if (this.browser) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.tasks()));
    }
  }
}
