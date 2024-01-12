import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public modalCtrl: ModalController
  ) {
  
  }
  handleRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }
}
