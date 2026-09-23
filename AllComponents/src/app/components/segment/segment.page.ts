import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonLabel, IonSegment, IonSegmentButton, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular';

@Component({ selector: 'app-segment', templateUrl: 'segment.page.html', styleUrls: ['segment.page.scss'], imports: [FormsModule, IonContent, IonHeader, IonLabel, IonSegment, IonSegmentButton, IonTitle, IonToolbar, IonBackButton, IonButtons] })
export class SegmentPage { vista = 'recientes'; }
