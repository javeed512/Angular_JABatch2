import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

    paramList:any = [];

    constructor(private router:Router, private route:ActivatedRoute){  // Router Service class DI


        this.route.queryParams.subscribe(

            (inputs)=>{

                  this.paramList = inputs;

                  console.log(this.paramList)


            }


        );

        

    }


    gotoHome(){

        // automatic redirect or routing to the home page

        console.log('gotoHome() is called , routing to the Home Page')

        this.router.navigate(['/home']);

    }

}
