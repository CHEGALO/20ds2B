let anArray=[5,6,5,4,3];
let mayor=0;


for(let x=0; x<5; x++){
  
  if(anArray[x]>anArray[x+1]){
  
   if(anArray[x]>mayor){ 
   mayor=anArray[x];
   }

  }
  
}

print(mayor);

