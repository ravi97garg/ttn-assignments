// Import a module containing the constants and method for calculating area of circle, rectangle, cylinder.

const PI = Math.PI

class Circle{
	constructor(radius){
		this.radius = radius
	}
	getArea() {
		return PI*this.radius*this.radius
	}
}

class Rectangle{
	constructor(length, breadth){
		this.length = length;
		this.breadth = breadth;
	}
	getArea() {
		return this.length*this.breadth;
	}
}
class Cylinder{
	constructor(radius, height){
		this.radius = radius;
		this.height = height;
	}
	getArea() {
		return PI*this.radius*this.radius*this.height;
	}
}

function getCircleArea(){
	let radius = document.getElementById("circle-radius").value;
	let circle = new Circle(Number(radius));
	console.log(circle.getArea())
	document.getElementById("circle-area").innerHTML = circle.getArea();
}

function getRectangleArea(){
	let length = document.getElementById("rect-length").value;
	let breadth = document.getElementById("rect-breadth").value;
	let rectangle = new Rectangle(length, breadth);
	document.getElementById("rect-area").innerText = rectangle.getArea();
}

function getCylinderArea(){
	let radius = document.getElementById("cyl-radius").value;
	let height = document.getElementById("cyl-height").value;
	let cylinder = new Cylinder(radius, height);
	document.getElementById("cyl-area").innerText = cylinder.getArea();
}