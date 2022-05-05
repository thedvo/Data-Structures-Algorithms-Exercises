/**
indRotatedIndex
 
Write a function called findRotatedIndex which accepts a rotated array of sorted targetbers and an integer. The function should return the index of target in the array. If the value is not found, return -1.

Constraints:

Time Complexity: O(log N)

Examples:

findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1 */

function findRotatedIndex(array, target) {
	let pivot = findPivot(array);
	if (pivot > 0 && target >= array[0] && target <= array[pivot - 1]) {
		return binarySearch(array, target, 0, pivot - 1);
	} else {
		return binarySearch(array, target, pivot, array.length - 1);
	}
}

function binarySearch(array, target, start, end) {
	if (array.length === 0) return -1;
	if (target < array[start] || target > array[end]) return -1;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (array[mid] === target) {
			return mid;
		} else if (target < array[mid]) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return -1;
}

function findPivot(arr) {
	if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
	let start = 0;
	let end = arr.length - 1;
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (arr[mid] > arr[mid + 1]) return mid + 1;
		else if (arr[start] <= arr[mid]) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
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
