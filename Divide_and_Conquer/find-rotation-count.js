/** 
findRotationCount

Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

Constraints:

Time Complexity: O(log N)

Examples:

findRotationCount([15, 18, 2, 3, 6, 12]) // 2
findRotationCount([7, 9, 11, 12, 5]) // 4
findRotationCount([7, 9, 11, 12, 15]) // 0
 */

function findRotationCount(arr, low = 0, high = arr.length - 1) {
	if (high < low) return 0; // for empty array
	if (high === low) return low; // array with only 1 element
	let mid = Math.floor((low + high) / 2);

	// if element after middle is larger
	if (arr[mid] > arr[mid + 1] && mid < high) {
		return mid + 1;
	}
	// if element before middle is larger
	if (arr[mid] < arr[mid - 1] && mid > low) {
		return mid;
	}

	// otherwise, drop left half or right half
	if (arr[high] > arr[mid]) {
		return findRotationCount(arr, low, mid - 1);
	}
	return findRotationCount(arr, mid + 1, high);
}
module.exports = findRotationCount;
