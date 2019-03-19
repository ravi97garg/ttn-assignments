// Write a program to implement inheritance upto 3 classes.The Class must  public variables and static functions.

class Size {
	constructor(size){
		this.length = size;
	}
	static getPi(){
		return Math.PI;
	}
}
class Area extends Size{
	constructor(length, breadth){
		super(length);
		this.width = breadth;
	}
	getArea() {
		return this.length*this.width;
	}
}
class Volume extends Area{
	constructor(length, breadth, height){
		super(length, breadth);
		this.height = height;
	}
	getVolume() {
		return this.length*this.width*this.height;
	}
}

console.log("value of pi is:",Volume.getPi())
let obj = new Volume(10, 12, 15);
console.log("Volume:", obj.getVolume());
console.log("Area:", obj.getArea());