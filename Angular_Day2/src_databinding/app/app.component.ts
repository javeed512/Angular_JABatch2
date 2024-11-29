import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mywebapp';
   uname = "Javeed";

   city = "Delhi";

   imageURL = "/assets/angular.png";



  display() {

   this.uname = "king";


  }

  setName():string {


     return this.uname = "king khan";

  }



}
