import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cordova} from "@ionic-native/core";

/**
 * Generated class for the FacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare let cordova:any;
@IonicPage()
@Component({
  selector: 'page-face',
  templateUrl: 'face.html',
})
export class FacePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacePage');
  }

  goLogin() {
    this.navCtrl.push('LoginPage');

  }

  goRegister() {
    this.navCtrl.push('RegisterPage');
  }

  goHome(){
    this.navCtrl.push('HomePage');
  }

  openUser(){
    if ('undefined' != typeof cordova) {
      cordova.ThemeableBrowser.open('http://baidu.com', '_blank');
    }
  }

}
