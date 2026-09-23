import { Component } from '@angular/core';
import { IonInput, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular';

@Component({
  selector: 'app-input',
  template: `<ion-header><ion-toolbar><ion-buttons slot="start"><ion-back-button defaultHref="/home"></ion-back-button></ion-buttons><ion-title>Ion Input</ion-title></ion-toolbar></ion-header><ion-content class="ion-padding"><h1>Ion Input</h1><p>Sirve para recibir texto, números y otros datos introducidos por el usuario.</p><h2>Código</h2><pre>&lt;ion-input label="Nombre"&gt;&lt;/ion-input&gt;</pre><h2>Ejemplo</h2><ion-input label="Tu nombre" label-placement="stacked" placeholder="Escribe aquí"></ion-input></ion-content>`,
  imports: [IonInput, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons],
})
export class InputPage {}
