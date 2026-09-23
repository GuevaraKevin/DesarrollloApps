import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonSelect, IonSelectOption, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular';

@Component({ selector: 'app-select', templateUrl: 'select.page.html', styleUrls: ['select.page.scss'], imports: [FormsModule, IonContent, IonHeader, IonSelect, IonSelectOption, IonTitle, IonToolbar, IonBackButton, IonButtons] })
export class SelectPage { framework = 'angular'; }
