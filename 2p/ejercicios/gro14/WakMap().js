class WeakMap {
   constructor () {
      this.items=[];
   }

   push(element){
      this.items.push(element);
   }

   pop(){
      let s = items.get(this); 
      let r = s.pop();
      return r;
   }
 
   size(){
      return this.items.length;
  }
   
}

let stack = new WeakMap();
stack.push(3);
console.log(stack);