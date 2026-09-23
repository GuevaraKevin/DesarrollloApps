import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonSearchbar, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular';

@Component({ selector: 'app-searchbar', templateUrl: 'searchbar.page.html', styleUrls: ['searchbar.page.scss'], imports: [FormsModule, IonContent, IonHeader, IonSearchbar, IonTitle, IonToolbar, IonBackButton, IonButtons] })
export class SearchbarPage { texto = ''; }
