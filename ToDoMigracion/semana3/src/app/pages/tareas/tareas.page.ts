import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  AlertController,
  IonButton,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-tareas-page',
  standalone: true,
  imports: [FormsModule, RouterLink, IonButton, IonCheckbox, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonTitle, IonToolbar],
  templateUrl: './tareas.page.html',
  styleUrl: './tareas.page.css'
})
export class TareasPage {
  readonly taskService = inject(TaskService);
  private readonly alertController = inject(AlertController);
  newTask = '';

  addTask(): void {
    this.taskService.add(this.newTask);
    this.newTask = '';
  }

  toggleTask(task: Task): void {
    this.taskService.toggle(task.id);
  }

  async confirmDelete(task: Task): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Eliminar tarea',
      message: `¿Quieres eliminar "${task.title}"?`,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Eliminar', role: 'destructive', handler: () => this.taskService.remove(task.id) }
      ]
    });
    await alert.present();
  }
}
