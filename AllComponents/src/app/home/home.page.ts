import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, IonIcon, RouterLink],
})
export class HomePage {
  componentes = [
    { nombre: 'Ion Button', ruta: '/components/button' },
    { nombre: 'Ion Card', ruta: '/components/card' },
    { nombre: 'Ion Input', ruta: '/components/input' },
    { nombre: 'Ion Alert', ruta: '/components/alert' },
    { nombre: 'Ion Modal', ruta: '/components/modal' },
    { nombre: 'Ion Toast', ruta: '/components/toast' },
    { nombre: 'Ion List', ruta: '/components/list' },
    { nombre: 'Ion Checkbox', ruta: '/components/checkbox' },
    { nombre: 'Ion Toggle', ruta: '/components/toggle' },
    { nombre: 'Ion Accordion', ruta: '/components/accordion' },
    { nombre: 'Ion Action Sheet', ruta: '/components/action-sheet' },
    { nombre: 'Ion Badge', ruta: '/components/badge' },
    { nombre: 'Ion Chip', ruta: '/components/chip' },
    { nombre: 'Ion Datetime', ruta: '/components/datetime' },
    { nombre: 'Ion Fab', ruta: '/components/fab' },
    { nombre: 'Ion Grid', ruta: '/components/grid' },
    { nombre: 'Ion Icon', ruta: '/components/icon' },
    { nombre: 'Ion Infinite Scroll', ruta: '/components/infinite-scroll' },
    { nombre: 'Ion Item', ruta: '/components/item' },
    { nombre: 'Ion Avatar', ruta: '/components/avatar' },
    { nombre: 'Ion Menu', ruta: '/components/menu' },
    { nombre: 'Ion Popover', ruta: '/components/popover' },
    { nombre: 'Ion Progress Bar', ruta: '/components/progress-bar' },
    { nombre: 'Ion Radio', ruta: '/components/radio' },
    { nombre: 'Ion Range', ruta: '/components/range' },
    { nombre: 'Ion Refresher', ruta: '/components/refresher' },
    { nombre: 'Ion Reorder', ruta: '/components/reorder' },
    { nombre: 'Ion Searchbar', ruta: '/components/searchbar' },
    { nombre: 'Ion Segment', ruta: '/components/segment' },
    { nombre: 'Ion Select', ruta: '/components/select' },
    { nombre: 'Ion Tabs', ruta: '/components/tabs' },
    { nombre: 'Ion Toolbar', ruta: '/components/toolbar' },
  ];

  constructor() {
    addIcons({ arrowForwardOutline });
  }
}
