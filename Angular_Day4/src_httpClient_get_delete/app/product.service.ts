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


    getAll():Observable<Product[]>{

        return  this.http.get<Product[]>(this.baseURL);


    }

      deleteById(id:number){

         return   this.http.delete(this.baseURL+id);

      }


}
