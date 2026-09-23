import { Component } from '@angular/core';
import { IonToggle, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular';

@Component({
  selector: 'app-toggle',
  template: `<ion-header><ion-toolbar><ion-buttons slot="start"><ion-back-button defaultHref="/home"></ion-back-button></ion-buttons><ion-title>Ion Toggle</ion-title></ion-toolbar></ion-header><ion-content class="ion-padding"><h1>Ion Toggle</h1><p>Sirve para activar o desactivar una configuración rápidamente.</p><h2>Código</h2><pre>&lt;ion-toggle&gt;Notificaciones&lt;/ion-toggle&gt;</pre><h2>Ejemplo</h2><ion-toggle [checked]="notificaciones" (ionChange)="notificaciones = $event.detail.checked">Notificaciones</ion-toggle><p>Estado: {{ notificaciones ? 'activadas' : 'desactivadas' }}</p></ion-content>`,
  imports: [IonToggle, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons],
})
export class TogglePage { notificaciones = true; }
