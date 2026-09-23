import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonList, IonItem, IonLabel } from '@ionic/angular';

@Component({
  selector: 'app-list',
  template: `<ion-header><ion-toolbar><ion-buttons slot="start"><ion-back-button defaultHref="/home"></ion-back-button></ion-buttons><ion-title>Ion List</ion-title></ion-toolbar></ion-header><ion-content class="ion-padding"><h1>Ion List</h1><p>Sirve para presentar una colección vertical de elementos relacionados.</p><h2>Código</h2><pre>&lt;ion-list&gt;&lt;ion-item&gt;Elemento&lt;/ion-item&gt;&lt;/ion-list&gt;</pre><h2>Ejemplo</h2><ion-list><ion-item><ion-label>Inicio</ion-label></ion-item><ion-item><ion-label>Perfil</ion-label></ion-item><ion-item><ion-label>Ajustes</ion-label></ion-item></ion-list></ion-content>`,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonList, IonItem, IonLabel],
})
export class ListPage {}
