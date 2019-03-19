// Implement Map and Set using Es6?

//Set class implementation
class Set{
 constructor(arr=[]){
   if(Array.isArray(arr))
      {
         this.arr=arr;
      }else{
      throw new Error("only array can be passed in Linked list");
    }
   
   this.arr=this.arr.filter((element,index)=>{
     if (this.arr.indexOf(element) == index){
       return element;
     }
   });
 }

 toString=()=>{
   return this.arr.toString();
 }
 //  toString(){
 //   return this.arr.toString();
 // }
  has(element){
    return this.arr.includes(element);
  }
  clear(){
    let b=new Stack();
    return this.arr.splice(0,this.arr.length)
  }
  delete(element){
    let findElement=this.arr.indexOf(element);
    return this.arr.splice(findElement,1);
  }
  add(element){
    if(this.arr.includes(element)){
      return this.arr;
    }else{
      this.arr.push(element);
      return this.arr;
    }
  }
}

//Map class implementation 
class Map{
  constructor(obj={}){
    this.obj=obj;
  }
  toString(){
    return this.obj.toString();
  }
  getElement(key){
    return this.obj[key];
  }
  setElement(key,valueOfKey){
    this.obj[key]=valueOfKey;
  }
  has(key){
    return this.obj.hasOwnProperty(key)
    
  }
}


//Testing code
let set= new Set([1,1,2,2]);
set.add(1);
set.add(2);
set.add(3);
console.log(set+'');


let map=new Map();
map.setElement(1,2);
map.setElement("a",3);

console.log(map);