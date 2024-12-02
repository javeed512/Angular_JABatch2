import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {



  @Input()
   inputData:string ="";

   @Input()
   inputData2:any;


    childData ="This is Child Data";

   @Output()
   eventEmitter:EventEmitter<string> = new EventEmitter<string>();


    sendData(){

        this.eventEmitter.emit(this.childData);


    }

}
