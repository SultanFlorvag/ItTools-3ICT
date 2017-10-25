import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'

import { LoginPage } from '../login/login';

import { ProfilePage } from '../profile/profile';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AngularFireAuth]
})
export class HomePage {

  constructor(public navCtrl: NavController, public afAuth:AngularFireAuth) {

  }

  goToProfile() {
    this.navCtrl.push(ProfilePage);
  }
  goToList() {
    this.navCtrl.push(ListPage);
  }
  signOut() {
    this.afAuth.auth.signOut();
    this.navCtrl.push(LoginPage);
  }

}
