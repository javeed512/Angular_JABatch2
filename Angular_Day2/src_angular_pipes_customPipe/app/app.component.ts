import { Component } from '@angular/core';

import './Employee'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mywebapp';

    name = "javeed";



    empList:Employee[] = [

      {"eid":101, "ename":"king","salary":90000},
      {"eid":102, "ename":"tom","salary":50000},
      {"eid":103, "ename":"smith","salary":30000},
      {"eid":104, "ename":"raju","salary":70000},
      {"eid":105, "ename":"javeed","salary":20000}

    ];


    


}
