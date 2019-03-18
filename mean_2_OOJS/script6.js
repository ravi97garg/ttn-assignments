function outer(){
var a = 0;
function inner(){
return ++a;
}
return inner;
}

// var o1 = outer();
// o1();