import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';

/**
 * Generated class for the RecommendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-recommend',
  templateUrl: 'recommend.html',
})
export class RecommendPage {

  slide_imgs: object[];
  works_items: object[];

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('recommend   constuctor');
    this.slide_imgs = [
      {
        img_url: 'assets/imgs/car.jpeg',
        page_url: 'www.baidu.com'
      },
      {
        img_url: 'assets/imgs/car.jpeg',
        page_url: 'www.baidu.com'
      },
      {
        img_url: 'assets/imgs/car.jpeg',
        page_url: 'www.baidu.com'
      },
      {
        img_url: 'assets/imgs/car.jpeg',
        page_url: 'www.baidu.com'
      },
      {
        img_url: 'assets/imgs/car.jpeg',
        page_url: 'www.baidu.com'
      },
    ];

    this.works_items = [
      {
        avatar_img: 'assets/imgs/car.jpeg',
        work_img: 'assets/imgs/car.jpeg',
        nb_like:10,
        nb_comments:10,
        time_deploy: '11小时之前'
      },
      {
        avatar_img: 'assets/imgs/car.jpeg',
        work_img: 'assets/imgs/car.jpeg',
        nb_like:10,
        nb_comments:10,
        time_deploy: '11小时之前'
      },
      {
        avatar_img: 'assets/imgs/car.jpeg',
        work_img: 'assets/imgs/car.jpeg',
        nb_like:10,
        nb_comments:10,
        time_deploy: '11小时之前'
      },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecommendPage');
  }

  doRefresh(event) {
    console.log('recommend dorefresh');
    setTimeout(()=>{
      event.complete();
    }, 2000);
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }


}
