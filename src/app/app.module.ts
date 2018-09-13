import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {HttpClientModule} from "@angular/common/http";
import {MyApp} from './app.component';
import {FacePage} from "../pages/face/face";
import {ArtcirclePage} from "../pages/artcircle/artcircle";
import {TradePage} from "../pages/trade/trade";
import {MinePage} from "../pages/mine/mine";
import {MainPage} from "../pages/main/main";
import {AddPage} from "../pages/add/add";
import {RecommendPage} from "../pages/recommend/recommend";
import {FollowPage} from "../pages/follow/follow";
import {WorksPage} from "../pages/works/works";
import {ArtistPage} from "../pages/artist/artist";
import {TalkPage} from "../pages/talk/talk";
import {WordsPage} from "../pages/words/words";
import {VideoPage} from "../pages/video/video";
import { HttpProvider } from '../providers/http/http';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    MyApp,
    FacePage,
    MainPage,
    ArtcirclePage,
    TradePage,
    MinePage,
    AddPage,
    RecommendPage,
    FollowPage,
    WorksPage,
    ArtistPage,
    TalkPage,
    WordsPage,
    VideoPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp,{
      iconMode:'ios',
      mode:'ios'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FacePage,
    MainPage,
    ArtcirclePage,
    TradePage,
    MinePage,
    AddPage,
    RecommendPage,
    FollowPage,
    WorksPage,
    ArtistPage,
    TalkPage,
    WordsPage,
    VideoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider
  ]
})
export class AppModule {
}
