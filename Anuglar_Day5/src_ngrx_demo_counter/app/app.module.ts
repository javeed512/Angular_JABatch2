import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycounterComponent } from './mycounter/mycounter.component';

import { StoreModule } from '@ngrx/store';
import { countReducer } from './reducers/counter.reducers';

@NgModule({
  declarations: [
    AppComponent,
    MycounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({count:countReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
