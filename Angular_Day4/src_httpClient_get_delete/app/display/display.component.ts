import { Component } from '@angular/core';
import { ProductService } from '../product.service';

import { Product } from '../Product';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

     productList: Product[] = [];
    
  constructor(private service:ProductService ){



    }



    getAllProducts(){

          this.service.getAll().subscribe(

              (products)=>{ 

              
                this.productList = products; 

                console.log(this.productList)
              }

          )


    }



      deleteById(id:number){

          this.service.deleteById(id).subscribe(

              (data)=>{console.log(id+ "record deleted")} , (err)=>{console.log(err)}


          );


            this.getAllProducts();

      }




}
