import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {


      productDetails!: Product;


  constructor(private route:ActivatedRoute){



        this.route.params.subscribe(

            (inputs)=>{ 
               
                  this.productDetails = inputs['productInfo'];
              
                  console.log(inputs)

              }


        );

  }


}
