import { Component } from '@angular/core';
import { AlertController, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  template: `<ion-header><ion-toolbar><ion-buttons slot="start"><ion-back-button defaultHref="/home"></ion-back-button></ion-buttons><ion-title>Ion Alert</ion-title></ion-toolbar></ion-header><ion-content class="ion-padding"><h1>Ion Alert</h1><p>Sirve para mostrar un mensaje importante y pedir una decisión al usuario.</p><h2>Código</h2><pre>await alertController.create(&#123; message: '¿Continuar?' &#125;);</pre><h2>Ejemplo</h2><ion-button (click)="mostrarAlerta()">Mostrar alerta</ion-button></ion-content>`,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons],
})
export class AlertPage {
  constructor(private alertController: AlertController) {}
  async mostrarAlerta() { const alert = await this.alertController.create({ header: 'Confirmación', message: 'Esta es una alerta de Ionic.', buttons: ['Entendido'] }); await alert.present(); }
}
