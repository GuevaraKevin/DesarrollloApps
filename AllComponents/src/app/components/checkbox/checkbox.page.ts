import { Component } from '@angular/core';
import { IonCheckbox, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular';

@Component({
  selector: 'app-checkbox',
  template: `<ion-header><ion-toolbar><ion-buttons slot="start"><ion-back-button defaultHref="/home"></ion-back-button></ion-buttons><ion-title>Ion Checkbox</ion-title></ion-toolbar></ion-header><ion-content class="ion-padding"><h1>Ion Checkbox</h1><p>Sirve para seleccionar o deseleccionar una opción de forma independiente.</p><h2>Código</h2><pre>&lt;ion-checkbox&gt;Aceptar términos&lt;/ion-checkbox&gt;</pre><h2>Ejemplo</h2><ion-checkbox [checked]="aceptado" (ionChange)="aceptado = $event.detail.checked">Aceptar términos</ion-checkbox>@if (aceptado) { <p>Opción seleccionada.</p> }</ion-content>`,
  imports: [IonCheckbox, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons],
})
export class CheckboxPage { aceptado = false; }
