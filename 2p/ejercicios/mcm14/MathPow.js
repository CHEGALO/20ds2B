
function Mathpow(a,b){


    let acum=a;
    for(let i=1; i<b; i++){

	acum=acum*a;

	

    }
    return acum
    

}


console.log(Mathpow(2,3));
