import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mywebapp';

   mycolor = 'green';




   flag:boolean = true;

   count:number = 10;

   course:string = "No Course";

    list:number[] = [10,20,30,40,50];


   isValid(){


      return  true;

   }

}
