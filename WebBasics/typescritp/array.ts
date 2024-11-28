

class   ArrayDemo {



     ar1:number[] = [2,4,6,8,10];

     list:Array<string>  = ["king","smith","ford","javeed"];


      data : [number,string];
  

           result:any;


       display(){

            for(let i=0; i<this.ar1.length ; i++){

                    console.log(this.ar1[i]);
            }


                console.log("using foreach method with callback fnc")
             this.ar1.forEach( (n1)=>{  console.log(n1)} );


       }


       displayList(){

                console.log('displayList')

                this.list.filter( (name)=>{ return  name.length > 4} ).forEach( (name)=>{ console.log(name)})




       }


        tuple(){


                    this.data = [101,'raju'];
                    console.log(this.data)

                    console.log(this.data[1]);


                    

        }


        anyType() : void{


                this.result = new Array();

                console.log(this.result)

                this.result =  new String();
                console.log(this.result)

                this.result = 99;

                console.log(this.result)

        }


}

   new ArrayDemo().display();

   var  obj:ArrayDemo = new ArrayDemo();

   obj.displayList();


   obj.tuple();

   obj.anyType();