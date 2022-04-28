/** 
findFloor

Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. 

The floor of x in an array is the largest element in the array which is smaller than or equal to x. 

If the floor does not exist, return -1.

Examples:

findFloor([1,2,8,10,10,12,19], 9) // 8
findFloor([1,2,8,10,10,12,19], 20) // 19
findFloor([1,2,8,10,10,12,19], 0) // -1
Constraints

Time Complexity: O(log N) */

function findFloor(arr, value, low = 0, high = arr.length - 1) {
	while (low <= high) {
		let mid = Math.floor((high + low) / 2);
		let middle = arr[mid];

		if (middle === value) {
			return middle;
		} else if (middle < value && !arr[mid + 1]) {
			return middle;
		} else if (middle < value && arr[mid + 1] > value) {
			return middle;
		} else if (middle > value) {
			return findFloor(arr, value, low, mid - 1);
		} else {
			return findFloor(arr, value, mid + 1, high);
		}
	}
	return -1;
}

module.exports = findFloor;
