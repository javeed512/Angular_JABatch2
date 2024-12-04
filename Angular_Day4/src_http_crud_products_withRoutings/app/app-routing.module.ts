import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AppComponent } from './app.component';

const routes: Routes = [
      {path:'home',component:AppComponent},
      {path:'display',component:DisplayComponent},
      {path:'add-product',component:AddProductComponent},
      {path:'update-product',component:UpdateProductComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
