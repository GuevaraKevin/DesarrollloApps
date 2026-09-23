import { Component } from '@angular/core';
import { ToastController, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  template: `<ion-header><ion-toolbar><ion-buttons slot="start"><ion-back-button defaultHref="/home"></ion-back-button></ion-buttons><ion-title>Ion Toast</ion-title></ion-toolbar></ion-header><ion-content class="ion-padding"><h1>Ion Toast</h1><p>Sirve para mostrar una notificación breve sin interrumpir la tarea actual.</p><h2>Código</h2><pre>toastController.create(&#123; message: 'Guardado' &#125;)</pre><h2>Ejemplo</h2><ion-button (click)="mostrarToast()">Mostrar toast</ion-button></ion-content>`,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons],
})
export class ToastPage {
  constructor(private toastController: ToastController) {}
  async mostrarToast() { const toast = await this.toastController.create({ message: 'Cambios guardados correctamente', duration: 2000, position: 'bottom' }); await toast.present(); }
}
