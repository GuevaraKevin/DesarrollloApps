import { Component } from '@angular/core';
import { IonContent, IonHeader, IonRefresher, IonRefresherContent, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular';

@Component({ selector: 'app-refresher', templateUrl: 'refresher.page.html', styleUrls: ['refresher.page.scss'], imports: [IonContent, IonHeader, IonRefresher, IonRefresherContent, IonTitle, IonToolbar, IonBackButton, IonButtons] })
export class RefresherPage { mensaje = 'Desliza hacia abajo para actualizar'; actualizar(event: Event) { this.mensaje = 'Contenido actualizado'; (event.target as HTMLIonRefresherElement).complete(); } }
