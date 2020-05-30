class WeakMap {
   constructor () {
      items.set(this, []);
   }

   push(element){
      let s = items.get(this); //{3}
      s.push(); 
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