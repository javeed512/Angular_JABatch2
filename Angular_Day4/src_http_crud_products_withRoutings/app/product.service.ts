import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


    baseURL:string = "http://localhost:3000/products/";

  constructor(private  http:HttpClient) {

   }


      addProduct(product:Product):Observable<Product>{


          return  this.http.post<Product>(this.baseURL,product);




      }


        updateProductDetails(product:Product):Observable<Product>{


           return   this.http.put<Product>(this.baseURL+product.id , product);


        }




    getAll():Observable<Product[]>{

        return  this.http.get<Product[]>(this.baseURL);


    }

      deleteById(id:number){

         return   this.http.delete(this.baseURL+id);

      }



    searchByProductName(pname:string):Observable<Product[]>{



      return    this.http.get<Product[]>(this.baseURL+"?pname="+pname);


    }



}
