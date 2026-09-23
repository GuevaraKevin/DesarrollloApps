import { Component } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular';

@Component({
  selector: 'app-card',
  template: `<ion-header><ion-toolbar><ion-buttons slot="start"><ion-back-button defaultHref="/home"></ion-back-button></ion-buttons><ion-title>Ion Card</ion-title></ion-toolbar></ion-header><ion-content class="ion-padding"><h1>Ion Card</h1><p>Sirve para agrupar información relacionada en una superficie visual.</p><h2>Código</h2><pre>&lt;ion-card&gt;Contenido&lt;/ion-card&gt;</pre><h2>Ejemplo</h2><ion-card><ion-card-header><ion-card-title>Curso de Ionic</ion-card-title></ion-card-header><ion-card-content>Aprende a construir interfaces con componentes reutilizables.</ion-card-content></ion-card></ion-content>`,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons],
})
export class CardPage {}
