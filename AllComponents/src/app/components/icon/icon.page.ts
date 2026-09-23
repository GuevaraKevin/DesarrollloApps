import { Component } from '@angular/core';
import { IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { heartOutline, starOutline } from 'ionicons/icons';

@Component({ selector: 'app-icon', templateUrl: 'icon.page.html', styleUrls: ['icon.page.scss'], imports: [IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons] })
export class IconPage { constructor() { addIcons({ heartOutline, starOutline }); } }
