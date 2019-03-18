// arguments object has 3 properties:
// arguments.callee()
// arguments.length
// arguments[@@iterator]

// arguments.callee() is technically the function inside which the current definition is executing. Thus anonymous functions can be used recursively by using arguments.callee() method.
function factorial(){
  return [1, 2, 3, 4, 5].map(function(n) {
    return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});
}

// arguments.length tells the number of arguments provided to the function.
function average(){
  var sum = 0;
  for(let elem of arguments){
    sum+=elem;
  }
return sum/arguments.length;
}

// the third property helps us to access arguments as an Iterator. Thus we can use indexing as well as use for loops to tracerse through the argument object using for...of statement.
function sum(){
  var sum=0;
  for(let elem of arguments){
    sum+=elem;
  }
return sum
}