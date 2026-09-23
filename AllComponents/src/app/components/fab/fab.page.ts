import { Component } from '@angular/core';
import { IonFab, IonFabButton, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';

@Component({ selector: 'app-fab', templateUrl: 'fab.page.html', styleUrls: ['fab.page.scss'], imports: [IonFab, IonFabButton, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons] })
export class FabPage { constructor() { addIcons({ addOutline }); } }
