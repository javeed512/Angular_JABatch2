import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {


      uname = "";
      pwd = "";

  constructor(private route:ActivatedRoute){


       this.route.params.subscribe(

           (inputs)=>{ this.uname = inputs['username'];  
                     this.pwd = inputs['password'];
                      }
            );

  }




}
