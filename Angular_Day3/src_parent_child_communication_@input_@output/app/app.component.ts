import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  parentData = "This is Parent Data";

   jsonData = {"id":101,"name":"javeed","dob":"1991-06-19"};



    childMessage:string = "";

   fetchChildData(obj:string){

      console.log(obj);

      this.childMessage = obj;


   }


}
