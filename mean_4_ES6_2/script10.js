// Implementation of stack (using linked list) ?

// Linked List Implementation
class LinkedList{
	constructor(data){
		this.head= new Node(data);
		this.tail = this.head
		this.length = 1;
	}
	addFirst(data){
		let node = new Node(data);
		node.next = this.head;
		this.head = node;
		this.length++;
	}
	addLast(data){
		let node = new Node(data);
		this.tail.next = node;
		this.tail = node;
		this.length++;
	}
	getFirst() {
		return this.head;
	}
	getLast() {
		return this.tail;
	}
	toString() {
		let tempNode = this.head;
		while(tempNode != null){
			console.log(tempNode.data);
			tempNode = tempNode.next;
		}
	}
	length() {
		return this.length;
	}
}

// Linked List Node
class Node{
	constructor(data){
		this.data = data;
		this.next = null;
	}
}

// Stack Implementation
class Stack extends LinkedList{
	constructor(data){
		super(data)
		this.top = this.tail
	}
	push(data){
		this.addLast(data);
		this.top = this.tail;
	}
	pop() {
		let tempNode = this.head;
		while(tempNode.next != this.top){
			tempNode = tempNode.next;
		}
		tempNode.next = null;
		this.tail = tempNode;
		let popValue = this.top.data;
		this.top = tempNode;
		this.length--;
		return popValue;
	}
	peek() {
		return this.top;
	}
}

// Testing code
let s = new Stack(2);
s.push(10);
s.push(20);
s.push(40);
s.pop();
s.push(50);
s.toString()
console.log("Length:",s.length)