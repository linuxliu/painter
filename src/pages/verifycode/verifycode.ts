import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ToastController} from "ionic-angular";

/**
 * Generated class for the VerifycodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verifycode',
  templateUrl: 'verifycode.html',
})
export class VerifycodePage {
  verifyCode: string;
  type: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtr:ToastController) {
    this.type = navParams.get('source')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifycodePage');
  }

  gotoNext() {
    let reg_code = new RegExp('[0-9]{6}');
    if (!reg_code.test(this.verifyCode)) {
      const toast = this.toastCtr.create({
        message:'验证码不正确',
        duration:3000,
        position:'top',
      });
      toast.onDidDismiss(()=>{
      });
      toast.present();
      return;
    }
    if (this.type === '0') {
     // 注册
    }
    else if (this.type === '1') {
      // 登录
      this.navCtrl.push('HomePage')
    }
    else {
      // 忘记密码
    }
  }
}
