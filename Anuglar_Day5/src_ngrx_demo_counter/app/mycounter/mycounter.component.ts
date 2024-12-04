import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../actions/counter.actions';

@Component({
  selector: 'app-mycounter',
  templateUrl: './mycounter.component.html',
  styleUrls: ['./mycounter.component.css']
})
export class MycounterComponent {

    mycount: Observable<number> = new Observable<number>();

    constructor(private store:Store<{count:number}>){


          this.mycount =   store.select('count');  // selector to fetch data from store
    }



      doIncrement(){

         

        
        this.store.dispatch(increment());
      
       
      }

      doDecrement(){

        this.store.dispatch(decrement());
      }

      doReset(){

        this.store.dispatch(reset());

      }


}
