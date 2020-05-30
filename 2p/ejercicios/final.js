let a=5, b=6, c=7;

let s= 1/2*(a+b+c);





function formula(s,a,b,c){

    let R=(a*b*c)/4*(Math.sqrt(s*(s-a)*(s-b)*(s-c)));


    return R
}
console.log(formula(s,a,b,c));
