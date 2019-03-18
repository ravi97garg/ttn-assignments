var arr = [1,2,3,4,5];
// function printWithoutDelay(){
//   arr.forEach(function(element){
//     console.log(element);
//   })
// }
// setTimeout(printWithoutDelay, 3000);


// function printWithDelay1() {
//     for (var i = 0; i < arr.length; i++) {
//         (function (i) {
//             setTimeout(function () {
//                 console.log(arr[i]);
//             }, 3000 * i);
//         })(i);
//     };
// }
// printWithDelay1();

// function printWithDelay2(i=0) {
//   if(i == arr.length) return
//   console.log(arr[i])
//   setTimeout(function() {
//     printWithDelay2(++i);
//   }, 3000)
// }
// printWithDelay2()

// function printWithDelay3(i) {
//   console.log(arr[i])
// }
// myVar = setInterval(function(){
//   try {
//     i = i+1;
//   } catch(error) {
//     i = 0;
//   }
//   if(i == arr.length) {clearInterval(myVar)}
//   else
//   {printWithDelay3(i);}
// }, 3000)

// function printWithDelay4(){
//   for(let i=0; i<arr.length; i++){
//     setTimeout(function(){
//       console.log(arr[i])
//     }, i*3000)
//   }
// }
// printWithDelay4()