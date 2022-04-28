/**
indRotatedIndex
 
Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

Constraints:

Time Complexity: O(log N)

Examples:

findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1 */

function binarySearch(arr, target, low = 0, high = arr.length - 1) {
	if (high < low) return -1;

	let mid = Math.floor((low + high) / 2);
	if (target === arr[mid]) return mid;

	if (key > arr[mid]) return binarySearch(arr, target, mid + 1, high);

	return binarySearch(arr, low, mid - 1, key);
}

/* Function to get pivot.*/
function findPivot(arr, low, high) {
	// base cases
	if (high < low) return -1;
	if (high === low) return low;

	let mid = Math.floor((low + high) / 2);

	// works with larger values in array
	if (mid < high && arr[mid] > arr[mid + 1]) return mid;
	if (mid > low && arr[mid] < arr[mid - 1]) return mid - 1;

	// works with smaller values in array
	if (arr[low] >= arr[mid]) return findPivot(arr, low, mid - 1);
	return findPivot(arr, mid + 1, high);
}

function pivotedBinarySearch(arr, n, key) {
	let pivot = findPivot(arr, 0, n - 1);

	// If we didn't find a pivot,
	// then array is not rotated at all
	if (pivot == -1)
		return binarySearch(arr, (low = 0), (high = arr.length - 1), target);

	// If we found a pivot, then first compare with pivot
	// and then search in two subarrays around pivot
	if (arr[pivot] == target) return pivot;

	if (arr[0] <= target) return binarySearch(arr, 0, pivot - 1, target);

	return binarySearch(arr, pivot + 1, (high = arr.length - 1), target);
}

// // linear search
// function findRotatedIndex(arr, target) {;
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === target) {
// 			return i;
// 		}
// 	}
// 	return -1;
// }

module.exports = findRotatedIndex;
