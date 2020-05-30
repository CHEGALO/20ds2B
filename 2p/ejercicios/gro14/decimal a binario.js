class Stack{
        constructor(){ 
            this.items=[];}
        push(element){
        this.items.push(element);
        };

        isEmpty(){
            return this.items.length == 0;
        };
        pop(){
            return this.items.pop();
        };
    }
    
    function divideBy2(decNumber){
        var remStack = new Stack(),
        rem, binaryString = '';

        while (decNumber > 0){ //{1}
            rem = Math.floor(decNumber % 2); //{2}
            remStack.push(rem); //{3}
            decNumber = Math.floor(decNumber / 2); //{4}
        }
        
        while (!remStack.isEmpty()){ //{5}
        binaryString += remStack.pop().toString();
        }
     return binaryString;
    }
    console.log(divideBy2(233));
    console.log(divideBy2(10));
    console.log(divideBy2(1000));