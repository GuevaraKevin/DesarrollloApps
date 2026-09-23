import { Component } from '@angular/core';
import { PopoverController, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular';

@Component({ selector: 'app-popover', templateUrl: 'popover.page.html', styleUrls: ['popover.page.scss'], imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons] })
export class PopoverPage {
  constructor(private popoverController: PopoverController) {}
  async abrirPopover(event: Event) { const popover = await this.popoverController.create({ component: PopoverContent, event }); await popover.present(); }
}
@Component({ standalone: true, template: '<p class="ion-padding">Contenido del popover</p>' })
class PopoverContent {}
