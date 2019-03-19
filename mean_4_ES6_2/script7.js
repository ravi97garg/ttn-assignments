// Write a program to flatten a nested array to single level using arrow functions.

let arr = [1,2,[3,4],[5,[6,7],[8,9,10]]]
let res = [];
console.log("Array before flattening:", arr)
var flatten = (array) => {
    array.forEach((elem,i) =>{
        if(typeof elem == 'object'){
            flatten(elem)
        }
        else {
            res.push(elem)
        }
    });
}
flatten(arr)
console.log("Array after flattening:", res)