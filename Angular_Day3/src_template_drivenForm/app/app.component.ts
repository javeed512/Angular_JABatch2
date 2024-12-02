import { Component } from '@angular/core';

import  './Employee'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mywebapp';

    emp!: Employee;

    getFormData(data:Employee){

        console.log(data)

        this.emp = data;


    }


}
