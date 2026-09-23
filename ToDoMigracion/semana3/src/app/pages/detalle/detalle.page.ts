import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AlertController,
  IonBackButton,
  IonButtons,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-detalle-page',
  standalone: true,
  imports: [FormsModule, IonBackButton, IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, IonContent, IonHeader, IonItem, IonLabel, IonTitle, IonToolbar],
  templateUrl: './detalle.page.html',
  styleUrl: './detalle.page.css'
})
export class DetallePage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly alertController = inject(AlertController);
  readonly taskService = inject(TaskService);
  task?: Task;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.taskService.getById(id);
    if (!this.task) {
      void this.router.navigate(['/tareas']);
    }
  }

  toggleTask(): void {
    if (this.task) {
      this.taskService.toggle(this.task.id);
      this.task = this.taskService.getById(this.task.id);
    }
  }

  async editTask(): Promise<void> {
    if (!this.task) {
      return;
    }

    const alert = await this.alertController.create({
      header: 'Editar tarea',
      inputs: [{ name: 'title', type: 'text', value: this.task.title, placeholder: 'Título de la tarea' }],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Guardar',
          handler: (data: { title: string }) => {
            this.taskService.update(this.task!.id, data.title);
            this.task = this.taskService.getById(this.task!.id);
          }
        }
      ]
    });
    await alert.present();
  }

  async deleteTask(): Promise<void> {
    if (!this.task) {
      return;
    }

    const alert = await this.alertController.create({
      header: 'Eliminar tarea',
      message: `¿Quieres eliminar "${this.task.title}"?`,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Eliminar', role: 'destructive', handler: () => void this.router.navigate(['/tareas']).then(() => this.taskService.remove(this.task!.id)) }
      ]
    });
    await alert.present();
  }
}
