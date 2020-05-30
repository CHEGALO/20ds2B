let _items=Symbol();

class Stack {
    constructor(){ 
        this.items=[];
    }
    push(element){
    this.items.push(element);   
    };

}


let stack=new Stack();

stack.push(5);
stack.push(8);

let objectSymbols=Object.getOwnPropertySymbols(stack);
console.log(objectSymbols.length);
console.log(objectSymbols);
console.log(objectSymbols[0]);
stack.push(1);
console.log(stack.items);