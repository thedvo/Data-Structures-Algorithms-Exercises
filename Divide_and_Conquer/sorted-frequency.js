/**sortedFrequency
Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

Constraints:

Time Complexity: O(log N)

Examples:

sortedFrequency([1,1,2,2,2,2,3],2) // 4
sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1,1,2,2,2,2,3],1) // 2
sortedFrequency([1,1,2,2,2,2,3],4) // -1 */

// binary search

function frequencyCounter(arr, target) {
	let first = findFirst(arr, target);
	if (first === -1) return first;
	let last = findLast(arr, target);

	return last - first + 1;
}

function findFirst(arr, target, low = 0, high = arr.length - 1) {
	if (high >= low) {
		let mid = Math.floor((high + low) / 2);

		if ((mid === 0 || target > arr[mid - 1]) && arr[mid] === target) {
			return mid;
		} else if (target > arr[mid]) {
			return findFirst(arr, target, mid + 1, high);
		}
		return findFirst(arr, target, low, mid - 1);
	}
	return -1;
}

function findLast(arr, target, low = 0, high = arr.length - 1) {
	if (high >= low) {
		let mid = Math.floor((high + low) / 2);

		if (
			(mid === arr.length - 1 || target < arr[mid + 1]) &&
			arr[mid] === target
		) {
			return mid;
		} else if (target < arr[mid]) {
			return findLast(arr, target, low, mid - 1);
		}
		return findLast(arr, target, mid + 1, high);
	}
	return -1;
} 

// // linear search
// function sortedFrequency(arr, target) {
// 	let total = 0;

// 	for (i of arr) {
// 		if (i === target) {
// 			total++;
// 		}
// 	}
// 	if (total > 0) {
// 		return total;
// 	} else {
// 		return -1;
// 	}
// }

module.exports = sortedFrequency;
