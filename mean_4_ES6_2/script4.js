// Write a program to implement a class having static functions

class Volume{
	constructor(length, breadth, height){
		this.length = length;
		this.width = breadth;
		this.height = height;
	}
	getVolume() {
		return this.length*this.width*this.height;
	}
	static getPi() {
		return Math.PI;
	}
}

console.log("value of pi is:",Volume.getPi())
let obj = new Volume(10, 12, 15);
console.log("Volume:", obj.getVolume());