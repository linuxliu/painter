import { Component } from '@angular/core';

/**
 * Generated class for the Hello2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hello2',
  templateUrl: 'hello2.html'
})
export class Hello2Component {

  text: string;

  constructor() {
    console.log('Hello Hello2Component Component');
    this.text = 'Hello World';
  }

}
