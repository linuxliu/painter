import { Component } from '@angular/core';

/**
 * Generated class for the GoodmanComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'goodman',
  templateUrl: 'goodman.html'
})
export class GoodmanComponent {

  text: string;

  constructor() {
    console.log('Hello GoodmanComponent Component');
    this.text = 'Hello World';
  }

}
