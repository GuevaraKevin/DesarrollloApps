import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular';

@Component({ selector: 'app-infinite-scroll', templateUrl: 'infinite-scroll.page.html', styleUrls: ['infinite-scroll.page.scss'], imports: [CommonModule, IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonTitle, IonToolbar, IonBackButton, IonButtons] })
export class InfiniteScrollPage {
  elementos = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
  cargarMas(event: Event) { this.elementos.push(`Elemento ${this.elementos.length + 1}`); (event.target as HTMLIonInfiniteScrollElement).complete(); }
}
