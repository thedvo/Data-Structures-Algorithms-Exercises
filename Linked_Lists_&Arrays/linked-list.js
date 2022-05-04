/** Node: node for a singly linked list. */
// used for creating new nodes
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** LinkedList: chained together nodes. */
// linked list methods used on nodes
class LinkedList {
	constructor(vals = []) {
		this.head = null;
		this.tail = null;
		this.length = 0;

		for (let val of vals) this.push(val);
	}

	/** push(val): add new value to end of list. */
	push(val) {
		let newNode = new Node(val);

		// first check if there are any items in the list
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			// otherwise, set the tail to be newNode
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length += 1;
	}

	/** unshift(val): add new value to start of list. */
	unshift(val) {
		let newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		}
		newNode.next = this.head; // makes a reference for newNode to the current head node
		this.head = newNode; // then set the head to now be newNode
		this.length += 1;
	}

	/** pop(): return & remove last item. */
	pop() {
		return this.removeAt(this.length - 1);
	}

	/** shift(): return & remove first item at index 0. */
	shift() {
		return this.removeAt(0);
	}

	// helper function to help retrieve node at the specified index
	_get(idx) {
		let current = this.head;
		let count = 0;

		// ensures valid index. Cycles through the list until you find an index equal to the count.
		while (current !== null && count != idx) {
			count += 1;
			current = current.next;
		}

		return current;
	}

	/** getAt(idx): get val at idx. */
	getAt(idx) {
		if (idx >= this.length || idx < 0) {
			throw new Error('Invalid index.');
		}
		// first gets the node at that index, and then returns the value.
		return this._get(idx).val;
	}

	/** setAt(idx, val): set val at idx to val */
	setAt(idx, val) {
		if (idx >= this.length || idx < 0) {
			throw new Error('Invalid index.');
		}

		let current = this._get(idx);
		current.val = val;
	}

	/** insertAt(idx, val): add node w/val before idx. */
	insertAt(idx, val) {
		if (idx > this.length || idx < 0) {
			throw new Error('Invalid index.');
		}

		// if adding to front or end of array
		if (idx === 0) return this.unshift(val);
		if (idx === this.length) return this.push(val);

		// get the one before it
		let prev = this._get(idx - 1);

		// create new node with value
		let newNode = new Node(val);

		// setting link of newNode to be previous node's next value since you are adding a value in between them
		newNode.next = prev.next;
		prev.next = newNode;

		this.length += 1;
	}

	/** removeAt(idx): return & remove item at idx, */
	removeAt(idx) {
		if (idx >= this.length || idx < 0) {
			throw new Error('Invalid index.');
		}

		// removing head element and returns its value
		if (idx === 0) {
			let val = this.head.val;
			// just set value after the head to be the new head
			this.head = this.head.next;
			this.length -= 1;
			// also set it to be the tail if it's the only element in the list
			if (this.length < 2) this.tail = this.head;
			return val;
		}

		let prev = this._get(idx - 1);
		// removing tail element and returns its value
		if (idx === this.length - 1) {
			let val = prev.next.val;
			prev.next = null;
			this.tail = prev;
			this.length -= 1;
			return val;
		}
		// removing element in middle and returns its value
		let val = prev.next.val;
		prev.next = prev.next.next;
		this.length -= 1;
		return val;
	}

	/** average(): return an average of all values in the list */
	average() {
		if (this.length === 0) return 0;

		let total = 0;
		let current = this.head;

		while (current) {
			total += current.val;
			current = current.next;
		}
		return total / this.length;
	}
}

module.exports = LinkedList;

// Pop method alternative
// // If there is only 1 element in the list, set the value to null.
// if (this.head.next === null) {
// 	this.head = null;
// }

// // otherwise, we can proceed with checking elements starting from the head to find the last element. Once we reach the last element, we set it to null.
// let previous = this.head;
// let nextNode = this.head.next;

// while (nextNode.next !== null) {
// 	//while the last element is not equal to null
// 	previous = nextNode; // set the previous to equal the last element
// 	nextNode = nextNode.next; // then set last equal to the next element in the list
// }
// // once last.next is equal to null, we can see that we are at the last element in the array
// previous.next.next = null; // set the last element in the array to null, removing it
// this.length -= 1;
