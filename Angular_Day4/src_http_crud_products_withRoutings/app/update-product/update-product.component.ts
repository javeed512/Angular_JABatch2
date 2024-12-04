import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {


       constructor(private service:ProductService){



       }


        updateProductDetails(product:Product){


            this.service.updateProductDetails(product).subscribe(

                (response)=>{ console.log(response); alert("product updated successfully..") } ,

                (err)=>{ console.log(err)}


            );


        }




}
