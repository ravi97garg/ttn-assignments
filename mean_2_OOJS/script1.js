function Person(){
  this.canWalk = true;
}

function Employee(){
 this.canWork = true;
}

function Developer(){
  this.canCode = true;
}

Employee.prototype = new Person();
Developer.prototype = new Employee();
var ravi = new Developer();
console.log(ravi.canWalk);
console.log(ravi.canWork);
console.log(ravi.canCode);

