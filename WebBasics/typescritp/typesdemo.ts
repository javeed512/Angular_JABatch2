


class  Demo {


      name:string ="javeed";

      salary:number = 90000;

      isValid:boolean = true;


      doj:Date = new Date();

       city:String = new String("Hyderabad");



       getData(): string {


            console.log(this.name);
            console.log(this.salary);
            console.log(this.isValid);
            console.log(this.doj);

            console.log(this.city);

            return "thank u";


       }





}

  var   d:Demo =  new Demo();

        d.getData();

    