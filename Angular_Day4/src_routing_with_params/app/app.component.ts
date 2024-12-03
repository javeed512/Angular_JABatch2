import { Component } from '@angular/core';
import { Router } from '@angular/router';

import './Product'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  username = "javeed";
  password = "tiger";

  productInfo!: Product;
    
    constructor(private router:Router){

      
     this.productInfo = {"pid":101,"pname":"laptop","price":45000};

    }


  doPayment(){


      this.router.navigate(['/payment/'+this.productInfo])

  }


}
