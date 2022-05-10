/** TreeNode: node for a general tree. */

class TreeNode {
	constructor(val, children = []) {
		this.val = val;
		this.children = children;
	}
}

class Tree {
	constructor(root = null) {
		this.root = root;
	}

	/** sumValues(): add up all of the values in the tree. */

	sumValues() {
		if (!this.root) return 0;
		// return 0 if tree is empty

		let total = this.root.val;
		// set accumulator for total starting w/ the root value

		// create a recursive helper function to sum values
		function sumHelper(node) {
			// loops through all children for a node
			for (let child of node.children) {
				// add the child's value to the total
				total += child.val;

				//if this child has children, run recursive function on the children
				if (child.children.length > 0) {
					sumHelper(child);
				}
			}
		}
		// call the helper function on the root to execute the function call.
		sumHelper(this.root);
		// return the total sum once loop is complete
		return total;
	}

	/** countEvens(): count all of the nodes in the tree with even values. */

	countEvens() {
		if (!this.root) return 0;

		// first check if the root is even. If so, add 1 to the counter.
		let evenCounter = this.root.val % 2 === 0 ? 1 : 0;

		// checks through every node and it's children for even values
		function evenHelper(node) {
			for (let child of node.children) {
				if (child.val % 2 === 0) evenCounter++;

				if (child.children.length > 0) {
					evenHelper(child);
				}
			}
		}
		evenHelper(this.root);
		return evenCounter;
	}

	/** numGreater(lowerBound): return a count of the number of nodes
	 * whose value is greater than lowerBound. */

	numGreater(lowerBound) {
		if (!this.root) return 0;

		let counter = this.root.val > lowerBound ? 1 : 0;

		function compareValues(node) {
			for (let child of node.children) {
				if (child.val > lowerBound) counter++;

				if (child.children.length > 0) {
					compareValues(child);
				}
			}
		}
		compareValues(this.root);
		return counter;
	}
}

module.exports = { Tree, TreeNode };
