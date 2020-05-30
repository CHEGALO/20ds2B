let anArray=[2,3,4,5,6]
let binario=false


for(let x of anArray){

  if(x===7){
      binario=true;
      break;
  }

}

if(binario===true){
    console.log("encontrado")

}else{

    console.log("no encontrado")
 }
