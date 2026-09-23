import { Component } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonModal } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  template: `<ion-header><ion-toolbar><ion-buttons slot="start"><ion-back-button defaultHref="/home"></ion-back-button></ion-buttons><ion-title>Ion Modal</ion-title></ion-toolbar></ion-header><ion-content class="ion-padding"><h1>Ion Modal</h1><p>Sirve para mostrar contenido temporal sobre la página actual.</p><h2>Código</h2><pre>&lt;ion-modal [isOpen]="abierto"&gt;&lt;/ion-modal&gt;</pre><h2>Ejemplo</h2><ion-button (click)="abierto = true">Abrir modal</ion-button><ion-modal [isOpen]="abierto" (didDismiss)="abierto = false"><ng-template><ion-header><ion-toolbar><ion-title>Ventana modal</ion-title><ion-buttons slot="end"><ion-button (click)="abierto = false">Cerrar</ion-button></ion-buttons></ion-toolbar></ion-header><ion-content class="ion-padding">Este contenido aparece dentro de un modal.</ion-content></ng-template></ion-modal></ion-content>`,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonModal],
})
export class ModalPage { abierto = false; }
