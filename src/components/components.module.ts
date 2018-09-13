import { NgModule } from '@angular/core';
import { GoodmanComponent } from './goodman/goodman';
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
	declarations: [
    GoodmanComponent
  ],
	imports: [
    CommonModule
  ],
	exports: [
    GoodmanComponent
  ]
})
export class ComponentsModule {}
