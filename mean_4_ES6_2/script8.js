// Implement a linked list in es6 and implement addFirst() addLast(), length(), getFirst(), getLast().

class LinkedList{
	constructor(data){
		this.head= new Node(data);
		// this.head = v;
		// this.tail = v;
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

class Node{
	constructor(data){
		this.data = data;
		this.next = null;
	}
}

let ll = new LinkedList(2)
ll.addFirst(7)
ll.addFirst(6)
ll.addLast(5)
ll.toString()
console.log("Length:",ll.length)