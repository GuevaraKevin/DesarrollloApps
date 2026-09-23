import { Component } from '@angular/core';
import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { homeOutline, settingsOutline } from 'ionicons/icons';

@Component({ selector: 'app-tabs', templateUrl: 'tabs.page.html', styleUrls: ['tabs.page.scss'], imports: [IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons] })
export class TabsPage { constructor() { addIcons({ homeOutline, settingsOutline }); } }
