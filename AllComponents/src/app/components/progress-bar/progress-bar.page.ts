import { Component } from '@angular/core';
import { IonProgressBar, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular';

@Component({ selector: 'app-progress-bar', templateUrl: 'progress-bar.page.html', styleUrls: ['progress-bar.page.scss'], imports: [IonProgressBar, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons] })
export class ProgressBarPage { progreso = 0.65; }
