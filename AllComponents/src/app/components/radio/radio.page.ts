import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonItem, IonRadio, IonRadioGroup, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular';

@Component({ selector: 'app-radio', templateUrl: 'radio.page.html', styleUrls: ['radio.page.scss'], imports: [FormsModule, IonItem, IonRadio, IonRadioGroup, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons] })
export class RadioPage { opcion = 'ionic'; }
