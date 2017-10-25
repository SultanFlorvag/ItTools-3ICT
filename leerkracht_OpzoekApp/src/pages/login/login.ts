import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AngularFireAuth]
})
export class LoginPage {

  email:string = "";
  password:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth:AngularFireAuth) {
  }

  signIn() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
    .then((response) => {
      this.navCtrl.push(HomePage);
    })
    .catch((error) => {
      alert("er is iets foutgegaan");
    });
  }

  signUp() {

  }
}
