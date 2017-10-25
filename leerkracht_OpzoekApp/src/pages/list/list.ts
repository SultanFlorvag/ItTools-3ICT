import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ViewController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public alertCtrl: AlertController) {}

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  ngAfterViewInit(){
    let alert = this.alertCtrl.create({
      title: 'Interested?',
      message: 'Tap a profile for more info.',
      buttons: [
        {
          text: 'Got it!',
          role: 'cancel'}]
    });
    alert.present();
  }

}

@Component({
  template: `
    <ion-searchbar
      [(ngModel)]="myInput"
      [showCancelButton]="shouldShowCancel">
    </ion-searchbar>
    <ion-list inset>
      <ion-item class="kleuterschool">
         <ion-label>kleuter</ion-label>
         <ion-radio value="kleuterschool"></ion-radio>
       </ion-item>
       <ion-item class="lagere school">
         <ion-label>lager</ion-label>
         <ion-radio value="lagere school"></ion-radio>
       </ion-item>
       <ion-item class="middelbare school">
         <ion-label>middelbaar</ion-label>
         <ion-radio value="middelbare school"></ion-radio>
       </ion-item>
     </ion-list>
     <ion-list inset>
     <ion-item>
       <ion-label>Regio</ion-label>
       <ion-select multiple="true" cancelText="Cancel" okText="Confirm">
         <ion-option value="Antwerpen">Antwerpen</ion-option>
         <ion-option>Limburg</ion-option>
         <ion-option>Oost-Vlaanderen</ion-option>
         <ion-option>West-Vlaanderen</ion-option>
         <ion-option>Vlaams-Brabant</ion-option>
         <ion-option>Waals-Brabant</ion-option>
         <ion-option>Henegouwen</ion-option>
         <ion-option>Luik</ion-option>
         <ion-option>Luxemburg</ion-option>
         <ion-option>Namen</ion-option>
       </ion-select>
     </ion-item>
   </ion-list>
  `
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
}
