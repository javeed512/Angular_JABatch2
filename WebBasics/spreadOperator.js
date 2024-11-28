

//  ...  known as spread operator

function   sum(...x){    // here parameter x act like an array[]


        console.log('sum() is called...')

        console.log("parameters "+x.length)


        for(let i=0; i< x.length; i++){

                console.log(x[i]);
        }

}


sum();
sum(1,2);
sum(10,20,30);