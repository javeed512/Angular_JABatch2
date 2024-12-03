import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {



    constructor(private router:Router){  // Router Service class DI

        

    }


    gotoHome(){

        // automatic redirect or routing to the home page

        console.log('gotoHome() is called , routing to the Home Page')

        this.router.navigate(['/home']);

    }

}
