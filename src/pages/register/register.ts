import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController} from "ionic-angular";
import {VerifycodePage} from "../verifycode/verifycode";


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  tel_number : string;
  password: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtr:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  goNext() {
    const reg_tel = new RegExp('1[0-9]{10}');
    if (!reg_tel.test(this.tel_number)) {
      const toast = this.toastCtr.create({
        message:'手机号格式不正确',
        duration:3000,
        position:'top',
      });
      toast.onDidDismiss(()=>{
      });
      toast.present();
      return;
    }
    let regexp = new RegExp('[0-9a-zA-z\-_]{6,20}');
    if (!regexp.test(this.password)) {
      const toast = this.toastCtr.create({
        message:'密码为(6-20)位的数字、字母、下划线组合',
        duration:3000,
        position:'top'
      });
      toast.onDidDismiss(()=>{
      });
      toast.present();
      return;
    }
    this.navCtrl.push('VerifycodePage', {'source':1});
  }

}
