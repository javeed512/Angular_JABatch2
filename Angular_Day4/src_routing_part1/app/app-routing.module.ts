import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'about',component:AboutComponent},
    {path:'call',redirectTo:'contact',pathMatch:'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }