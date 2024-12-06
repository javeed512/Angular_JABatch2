import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , MyComponentComponent , CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[]
})
export class AppComponent {
  title = 'myapp';

    isLoggedIn:boolean = true;

  users= [

      {"id":1,"name":"king","age":26},
      {"id":2,"name":"smith","age":24},
      {"id":3,"name":"ford","age":25},
      {"id":4,"name":"tom","age":29}


  ];


  courses = [
    { id: 1, name: "Angular For Beginners" },
    { id: 2, name: "Angular Core Deep Dive" },
    { id: 3, name: "Angular Forms In Depth" },
  ];


  items = [

  
  ];

}
