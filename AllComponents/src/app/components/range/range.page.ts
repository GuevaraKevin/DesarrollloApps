import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonRange, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular';

@Component({ selector: 'app-range', templateUrl: 'range.page.html', styleUrls: ['range.page.scss'], imports: [FormsModule, IonRange, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons] })
export class RangePage { volumen = 50; }
