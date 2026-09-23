import { Component } from '@angular/core';
import { ActionSheetController, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular';

@Component({ selector: 'app-action-sheet', templateUrl: 'action-sheet.page.html', styleUrls: ['action-sheet.page.scss'], imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons] })
export class ActionSheetPage {
  constructor(private actionSheetController: ActionSheetController) {}
  async abrirActionSheet() { const sheet = await this.actionSheetController.create({ header: 'Opciones', buttons: ['Compartir', 'Editar', 'Cancelar'] }); await sheet.present(); }
}
