import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {



    constructor(private  service:ProductService){

    }



    addProduct(product:Product){

              this.service.addProduct(product).subscribe(

                  (response)=>{  console.log(response)

                    alert(response.id +" product added successfully")
                  } ,

                  (err)=>{ console.log(err)}



              );



    }




}
