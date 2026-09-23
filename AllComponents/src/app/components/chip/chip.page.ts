import { Component } from '@angular/core';
import { IonChip, IonLabel, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { closeCircleOutline } from 'ionicons/icons';

@Component({ selector: 'app-chip', templateUrl: 'chip.page.html', styleUrls: ['chip.page.scss'], imports: [IonChip, IonLabel, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons] })
export class ChipPage { constructor() { addIcons({ closeCircleOutline }); } }
