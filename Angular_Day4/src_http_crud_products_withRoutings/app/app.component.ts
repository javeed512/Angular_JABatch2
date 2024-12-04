import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // , providers:[ProductService]
})
export class AppComponent {
  title = 'mywebapp';


    productList:Product[] =[];

    constructor(private service:ProductService){



    }

       searchByProductName(data:any){

              console.log(data.pname)

            this.service.searchByProductName(data.pname).subscribe(

                (response)=>{  console.log(response); this.productList = response; } ,

                (err)=>{ console.log(err)}


            );


       }


}
