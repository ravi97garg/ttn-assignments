funcCounter = 0
objCounter = 0
function dummyFunc() {
console.log(this)
if(this == window)
  funcCounter++;
else
  objCounter++;
}