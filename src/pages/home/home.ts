import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage} from "../main/main";
import { ArtcirclePage} from "../artcircle/artcircle";
import { TradePage} from "../trade/trade";
import { MinePage} from "../mine/mine";
import {AddPage} from "../add/add";
import {HttpProvider} from "../../providers/http/http";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  tabRoots: object[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider:HttpProvider) {
    this.tabRoots = [
      {
        icon: 'home',
        title: '首页',
        root: MainPage
      },
      {
        icon: 'aperture',
        title: '认证专栏',
        root: ArtcirclePage
      },
      {
        icon: 'aperture',
        title: '签约专栏',
        root: ArtcirclePage
      },
      {
        icon: 'add',
        title:'',
        root: AddPage

      },
      {
        icon: 'cart',
        title: '拍卖商城',
        root: TradePage
      },
      {
        icon: 'cart',
        title: '机构推荐',
        root: TradePage
      },
      {
        icon: 'settings',
        title: '我的',
        root: MinePage
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.httpProvider.loadTest();
  }
}
