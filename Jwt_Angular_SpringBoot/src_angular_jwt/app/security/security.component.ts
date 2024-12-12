import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';
import { AuthRequest } from '../model/AuthRequest';


@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

    response:any;
    token:any;


    authRequest: AuthRequest = new AuthRequest();

    // authRequest:any = {
    //   "username":"babu",
    //   "password":"babu123"
    //   }

  constructor(private jwtService:JwtClientService){}


  ngOnInit(): void {
    
     // this.getAccessToken(this.authRequest);
  }


   readFormData(formData:any){

      this.authRequest.username = formData.form.value.username;
      this.authRequest.password = formData.form.value.password;

      this.getAccessToken(this.authRequest);

   }



  public getAccessToken(authRequest:any){

   let response =  this.jwtService.getGeneratedToken(authRequest);

      response.subscribe( (genToken)=> {
           this.token = genToken ;console.log(genToken); 
          this.accessApi(this.token) });

      

  }

  public accessApi(token:any){



  let responseBody =    this.jwtService.authorizationTest(token);

      console.log(responseBody )
  
  responseBody.subscribe( responseData => {
                           this.response = responseData;
                            console.log('responseData '+responseData)
                            } , error => {console.log('myerror '+error)});

  }



}
