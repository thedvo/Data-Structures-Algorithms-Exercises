class Node {
	constructor(value, adjacent = new Set()) {
		this.value = value;
		this.adjacent = adjacent;
	}
}

class Graph {
	constructor() {
		this.nodes = new Set();
	}

	// this function accepts a Node instance and adds it to the nodes property on the graph
	addVertex(vertex) {
		this.nodes.add(vertex);
	}

	// this function accepts an array of Node instances and adds them to the nodes property on the graph
	addVertices(vertexArray) {
		for (let vertex of vertexArray) {
			this.addVertex(vertex);
		}
	}

	// this function accepts two vertices and updates their adjacent values to include the other vertex
	addEdge(v1, v2) {
		v1.adjacent.add(v2);
		v2.adjacent.add(v1);
	}

	// this function accepts two vertices and updates their adjacent values to remove the other vertex
	removeEdge(v1, v2) {
		v1.adjacent.delete(v2);
		v2.adjacent.delete(v1);
	}

	// this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
	removeVertex(vertex) {
		for (let node of this.nodes) {
			if (node.adjacent.has(vertex)) {
				node.adjacent.delete(vertex);
			}
		}
		this.nodes.delete(vertex);
	}

	// this function returns an array of Node values using DFS
	depthFirstSearch(start) {
		let visited = new Set();
		let result = [];

		function traverse(vertex) {
			// base case. stops recursion if current vertex is null
			if (!vertex) {
				return null;
			}
			// visit current node
			visited.add(vertex);
			result.push(vertex.value); // add node value to the array

			// visit neighbors
			vertex.adjacent.forEach((neighbor) => {
				if (!visited.has(neighbor)) {
					return traverse(neighbor);
				}
			});
		}
		traverse(start);
		return result;
	}

	dfsIterative(start) {
		let stack = [start];
		let visited = new Set();
		let result = [];

		let current;

		visited.add(start);

		while (stack.length) {
			current = stack.pop();
			result.push(current.value);

			current.adjacent.forEach((neighbor) => {
				if (!visited.has(neighbor)) {
					visited.add(neighbor);
					stack.push(neighbor);
				}
			});
		}
		return result;
	}

	// this function returns an array of Node values using BFS
	breadthFirstSearch(start) {
		let queue = [start];
		let visited = new Set();
		let result = [];

		let current;

		visited.add(start);

		while (queue.length) {
			// for the current node
			current = queue.shift();
			result.push(current.value);

			// for the current node's adjacent neighbors
			current.adjacent.forEach((neighbor) => {
				// if the neighbor is not in the visited Set, add it to the queue and set.
				if (!visited.has(neighbor)) {
					visited.add(neighbor);
					queue.push(neighbor);
				}
			});
		}
		// once the queue is empty, return the array of values
		return result;
	}
}

module.exports = { Graph, Node };
