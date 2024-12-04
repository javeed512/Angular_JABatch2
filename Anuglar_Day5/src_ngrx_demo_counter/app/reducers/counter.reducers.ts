import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "../actions/counter.actions";

  export  const  initialState = 0;

  export const  countReducer =   createReducer(

                initialState ,  
                on(increment,(state)=>{ return state+1;})  ,
                on(decrement,(state)=>{ return state - 1;})  ,
                on(reset,(state)=>{ return 0;})                    


             );