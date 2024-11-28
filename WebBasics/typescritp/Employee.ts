

import { Student } from './Student';

class  Employee {


            student1 : Student =  { "sid":111 , "sname":"tom"};

            


        //     eid:number ;
        // ename:string;
        // doj:Date;



           

            //  constructor(eid,ename,doj){

            //        this.eid = eid;
            //        this.ename = ename;
            //        this.doj = doj; 

            //  }



                constructor(private eid:number , private ename:string , private doj:Date){

                          

                }   





            display(){


                    console.log(this.eid   +"   "+this.ename + " "+this.doj);

                    console.log(this.student1.sid  +"  "+this.student1.sname)

            }

}


  var  e1:Employee =  new Employee(101,'javeed',new Date());


   e1.display();

   console.log(e1)
