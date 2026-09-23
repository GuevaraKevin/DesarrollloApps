import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonItem, IonLabel, IonReorder, IonReorderGroup, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular';

@Component({ selector: 'app-reorder', templateUrl: 'reorder.page.html', styleUrls: ['reorder.page.scss'], imports: [CommonModule, IonContent, IonHeader, IonItem, IonLabel, IonReorder, IonReorderGroup, IonTitle, IonToolbar, IonBackButton, IonButtons] })
export class ReorderPage { elementos = ['Primero', 'Segundo', 'Tercero']; reordenar(event: CustomEvent) { this.elementos = event.detail.complete(this.elementos); } }
