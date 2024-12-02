import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 

       registerForm!: FormGroup;


        submitted:boolean = false;


    constructor(private formBuilder:FormBuilder){

    }


    ngOnInit(): void {

         this.registerForm  =   this.formBuilder.group({

                uname:['enter uname',Validators.required],
                pwd:['enter password min 4 ,max 10 char',[Validators.required , Validators.minLength(4) , Validators.maxLength(10) ]  ],
                email:['email ',[Validators.required , Validators.email ]],



         });

   
    }



     get  f(){

        return this.registerForm.controls;

     }

    
    onSubmit(){

        this.submitted = true;

        if(this.registerForm.invalid){

          return ;

        }

        else{

              console.log(this.registerForm);

              console.log(this.registerForm.value)

            alert('Registration Successful..')


        }



    }


}
