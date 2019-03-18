//In call() method the object reference is passed according to which the function should be executed.
function print(id){
  console.log("First name:" + this.fname + " Last name: " + this.lname,id);
}

function Person(fname, lname){
  this.fname = fname;
  this.lname = lname;
}
var harsh = new Person("harsh","saxena")
print.call(harsh,1);
var vikram = new Person("vikram", "goyal")
print.call(vikram,2);

//bind helps us to create a new modified function which can be stored into a variable. this makes the function can be called just by calling that variable, instead of writing call() of that function
printHarsh = print.bind(harsh,3); // the context 'harsh' and argument '3' is binded hardly and can't be changed in future
printHarsh();