class Stack{
     constructor(){
        this.dataStore = [];
     }
    
    
    push(element){ 
        this.dataStore[this.top++] = element;
    };
    peek() {
    return this.dataStore[this.top-1];
    }
     pop() {
    return this.dataStore[--this.top];
    }
    clear() { this.top = 0;
    }
   length() { return this.top;
    }
}
    
    var s = new Stack(); 
    s.push("David"); 
    s.push("Raymond"); 
    s.push("Bryan"); 
    console.log("length: " + s.length()); 
    console.log(s.peek());
    var popped = s.pop();
    console.log("The popped element is: " + popped); console.log(s.peek());
    s.push("Cynthia");
    console.log(s.peek());
    s.clear();
    console.log("length: " + s.length()); print(s.peek());
    s.push("Clayton");
    console.log(s.peek()); 