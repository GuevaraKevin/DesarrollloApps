import { Component } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular';

@Component({
  selector: 'app-button',
  template: `
    <ion-header><ion-toolbar><ion-buttons slot="start"><ion-back-button defaultHref="/home"></ion-back-button></ion-buttons><ion-title>Ion Button</ion-title></ion-toolbar></ion-header>
    <ion-content class="ion-padding"><h1>Ion Button</h1><p>Sirve para crear botones y ejecutar acciones cuando el usuario los pulsa.</p><h2>Código</h2><pre>&lt;ion-button&gt;Guardar&lt;/ion-button&gt;</pre><h2>Ejemplo</h2><ion-button (click)="guardado = true">Guardar</ion-button>@if (guardado) { <p>El botón ha sido pulsado.</p> }</ion-content>
  `,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons],
})
export class ButtonPage { guardado = false; }
