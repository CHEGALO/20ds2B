function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
   }
   function enqueue(element) {
    this.dataStore.push(element);
   }
   function dequeue() {
    return this.dataStore.shift();
   }
   function front() {
    return this.dataStore[0];
   }
   function back() {
    return this.dataStore[this.dataStore.length-1];
   }
   function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i] + "\n";
    }
    return retStr;
   }
   function empty() {
    if (this.dataStore.length == 0) {
    return true;
    }
    else {
    return false;
    }
   }
   function count() {
    return this.dataStore.length;
   }
   function getDancers(males, females) {
    var names = read("dancers.txt").split("\n");
    for (var i = 0; i < names.length; ++i) {
    names[i] = names[i].trim();
    }
    for (var i = 0; i < names.length; ++i) {
    var dancer = names[i].split(" ");
    var sex = dancer[0];
    var name = dancer[1];
    if (sex == "F") {
    femaleDancers.enqueue(new Dancer(name, sex));
    }
    else {
    maleDancers.enqueue(new Dancer(name, sex));
    }
    }
   }
   function dance(males, females) {
    console.log("The dance partners are: \n");
    while (!females.empty() && !males.empty()) {
    person = females.dequeue();
    console.log("Female dancer is: " + person.name);
    person = males.dequeue();
    console.log(" and the male dancer is: " + person.name);
    }
    
   }
   
   var maleDancers = new Queue();
   var femaleDancers = new Queue();
    getDancers(maleDancers, femaleDancers);
    dance(maleDancers, femaleDancers);
if (maleDancers.count() > 0) {
 console.log("There are " + maleDancers.count() +
 " male dancers waiting to dance.");
}
if (femaleDancers.count() > 0) {
 console.log("There are " + femaleDancers.count() +
 " female dancers waiting to dance.");
}