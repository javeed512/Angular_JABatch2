import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: '<h2>This is only template from component</h2>',
  styles: [' h2{ color: blue;}']
})
export class HelloComponent {


  imageURL = "/assets/angular.png";

}
