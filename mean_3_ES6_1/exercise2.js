let list = document.querySelectorAll("li")
// var lis = document.getElementsByTagName("li");
let arr1 = []
for(let iter=0; iter<list.length; iter++){
  arr1.push(list[iter].innerText)
}
console.log(arr1);

let arr2 = arr1.filter(val => {
  if(val.includes('Flexbox')) return val
})
console.log(arr2)

var lis = Array.prototype.slice.call(list);
let arr3 = lis.map(listItem => {
  return listItem.dataset.time;
})
console.log(arr3)

let arr4 = arr3.map(time => {
  return time.split(':')[0]*60+parseInt(time.split(':')[1]);
})
console.log(arr4)

let sum = arr4.reduce((a,b) => {
  return a+b;
});
console.log(sum)