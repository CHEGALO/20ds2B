function calcularMCD(a, b){
    var R=0, x=b, mcd=a
    
    do{
    R=mcd%x
    mcd=x
    x=R
    
    }while(R!==0)
    
    return mcd
    
    }
    var x=5, y=10
    console.log(calcularMCD(x, y));
    mcm=x*y/(calcularMCD(x, y))
    console.log(mcm)