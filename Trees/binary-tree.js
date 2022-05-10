/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinaryTree {
	constructor(root = null) {
		this.root = root;
	}

	/** minDepth(): return the minimum depth of the tree -- that is,
	 * the length of the shortest path from the root to a leaf. */

	minDepth() {
		if (!this.root) return 0;

		function findMinDepth(node) {
			if (node.left === null && node.right === null) return 1;
			// if node doesn't have any children (most likely leaf), return 1.
			// Most likely run at end of the path. Accumulate +1 depending on length of path.

			// add 1 for each level. Run recursive f(x) depending if left/right is null
			if (node.left === null) return findMinDepth(node.right) + 1;
			if (node.right === null) return findMinDepth(node.left) + 1;

			// if neither node is null, return the path. (Math.min will check right/left to see shorter path)
			return Math.min(findMinDepth(node.left), findMinDepth(node.right)) + 1;
		}
		return findMinDepth(this.root);
		// executes initial function call on root
	}

	/** maxDepth(): return the maximum depth of the tree -- that is,
	 * the length of the longest path from the root to a leaf. */

	maxDepth() {
		if (!this.root) return 0;

		function findMaxDepth(node) {
			if (node.left === null && node.right === null) return 1;
			if (node.left === null) return findMaxDepth(node.right) + 1;
			if (node.right === null) return findMaxDepth(node.left) + 1;

			// if neither node is null, return the path which is longer.
			return Math.max(findMaxDepth(node.left), findMaxDepth(node.right)) + 1;
		}
		return findMaxDepth(this.root);
	}

	/** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
	 * The path doesn't need to start at the root, but you can't visit a node more than once. */

	maxSum() {
		// initialize accumulator
		let result = 0;

		function findMaxSum(node) {
			if (node === null) return 0;
			let leftSum = findMaxSum(node.left);
			let rightSum = findMaxSum(node.right);

			result = Math.max(result, node.val + leftSum + rightSum);

			return Math.max(0, leftSum + node.val, rightSum + node.val);
		}
		findMaxSum(this.root);
		return result;
	}

	/** nextLarger(n): return the smallest value in the tree
	 * which is larger than n. Return null if no such value exists. */

	nextLarger(n) {
		if (!this.root) return null;

		// breadth first search (BFS) --> use queue
		let queue = [this.root];
		// closest is smallest value in the tree which is greater than n
		let closest = null;

		while (queue.length) {
			let currentNode = queue.shift(); // shift from beginning of queue
			let currentVal = currentNode.val; // assign value of shifted node

			let greaterThanN = currentVal > n; // compare currentVal to the input (n)
			let isClosest = currentVal < closest || closest === null;

			if (greaterThanN && isClosest) {
				// if the 2 statements above are True, reassign value of closest to current node's value
				closest = currentVal;
			}

			// if there are values in left/right nodes, add them to the queue
			if (currentNode.left) queue.push(currentNode.left);
			if (currentNode.right) queue.push(currentNode.right);
		}
		return closest;
		// return closest once While Loop is complete (empty queue)
	}

	/** Further study!
	 * areCousins(node1, node2): determine whether two nodes are cousins
	 * (i.e. are at the same level but have different parents. ) */

	areCousins(node1, node2) {}

	/** Further study!
	 * serialize(tree): serialize the BinaryTree object tree into a string. */

	static serialize() {}

	/** Further study!
	 * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

	static deserialize() {}

	/** Further study!
	 * lowestCommonAncestor(node1, node2): find the lowest common ancestor
	 * of two nodes in a binary tree. */

	lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
