
// arrow or anonymous

const f1 = ()=>{

    console.log('this is arrow function')
 };


// anonymous
 const f2 =  function() {

    console.log('f2() is called..')
 }

//  f1 = () =>{

//         console.log('arrow func modified')

//      }

 f1();

 f2();


  function  add( x,  y = 0){


        console.log('add() is called..')

        console.log(x  +' '+  y)


  }

  add(4);


  const  sum =  (x,y) =>{

        console.log('sum()  with x,y')

            return x+y;
  }


  var result = sum(10,20);

  console.log("Result "+result)