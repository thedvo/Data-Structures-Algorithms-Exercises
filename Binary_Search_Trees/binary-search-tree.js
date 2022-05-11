class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor(root = null) {
		this.root = root;
	}

	/** insert(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses iteration. */

	insert(val) {
		// first start off by creating new node w/ value
		let newNode = new Node(val);

		// if there is no root established, set the newNode to be the root.
		if (!this.root) {
			this.root = newNode;
			return this;
		}

		// now set the currentNode to root to start the loop
		let currentNode = this.root;

		while (currentNode) {
			if (val === currentNode.val) return undefined;
			if (val < currentNode.val) {
				// first checks if there is anything in the left node. If not, set newNode to be the left node.
				if (!currentNode.left) {
					currentNode.left = newNode;
					return this;
				}
				// otherwise, set the currentNode to the left node.
				currentNode = currentNode.left;
			} else {
				// first checks if there is anything in the right node. If not, set newNode to be the right node.
				if (!currentNode.right) {
					currentNode.right = newNode;
					return this;
				}
				currentNode = currentNode.right;
			}
		}
	}

	/** insertRecursively(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses recursion. */

	insertRecursively(val, currentNode = this.root) {
		if (this.root === null) {
			this.root = new Node(val);
			return this;
		}

		if (val < currentNode.val) {
			if (!currentNode.left) {
				currentNode.left = new Node(val);
				return this;
			}
			return this.insertRecursively(val, currentNode.left);
		} else {
			if (!currentNode.right) {
				currentNode.right = new Node(val);
				return this;
			}
			return this.insertRecursively(val, currentNode.right);
		}
	}

	/** find(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses iteration. */

	find(val) {
		let currentNode = this.root;
		let found = false;

		if (val === currentNode) return currentNode;

		while (currentNode && !found) {
			if (val < currentNode.val) {
				currentNode = currentNode.left;
			} else if (val > currentNode.val) {
				currentNode = currentNode.right;
			} else {
				found = true;
			}
		}
		if (!found) return undefined;
		return currentNode;
	}

	/** findRecursively(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses recursion. */

	findRecursively(val, currentNode = this.root) {
		if (this.root === null) return undefined;

		if (val < currentNode.val) {
			if (currentNode.left === null) return undefined;
			return this.findRecursively(val, currentNode.left);
		} else if (val > currentNode.val) {
			if (currentNode.right === null) return undefined;
			return this.findRecursively(val, currentNode.right);
		}
		return currentNode;
	}

	/** dfsPreOrder(): Traverse the array using pre-order DFS.
	 * Return an array of visited nodes. */

	dfsPreOrder() {
		let data = [];
		let currentNode = this.root;

		function traverse(node) {
			data.push(node.val);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}
		traverse(currentNode);
		return data;
	}

	/** dfsInOrder(): Traverse the array using in-order DFS.
	 * Return an array of visited nodes. */

	dfsInOrder() {
		let data = [];
		let currentNode = this.root;

		function traverse(node) {
			if (node.left) traverse(node.left);
			data.push(node.val);
			if (node.right) traverse(node.right);
		}
		traverse(currentNode);
		return data;
	}

	/** dfsPostOrder(): Traverse the array using post-order DFS.
	 * Return an array of visited nodes. */

	dfsPostOrder() {
		let data = [];
		let currentNode = this.root;

		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			data.push(node.val);
		}
		traverse(currentNode);
		return data;
	}

	/** bfs(): Traverse the array using BFS.
	 * Return an array of visited nodes. */

	bfs() {
		let data = []; // initialize array of visited nodes
		let queue = []; // initialize queue for breadth first search
		let currentNode = this.root;

		queue.push(currentNode); // start queue with root node

		while (queue.length) {
			currentNode = queue.shift();
			data.push(currentNode.val);

			// for the visited urrentNode, if there is a left/right child node, add them to the queue
			if (currentNode.left) {
				queue.push(currentNode.left);
			}
			if (currentNode.right) {
				queue.push(currentNode.right);
			}
		}
		// once all nodes have been visited, return the array of data
		return data;
	}

	/** Further Study!
	 * remove(val): Removes a node in the BST with the value val.
	 * Returns the removed node. */

	remove(val) {}

	/** Further Study!
	 * isBalanced(): Returns true if the BST is balanced, false otherwise. */

	isBalanced() {}

	/** Further Study!
	 * findSecondHighest(): Find the second highest value in the BST, if it exists.
	 * Otherwise return undefined. */

	findSecondHighest() {}
}

module.exports = BinarySearchTree;
