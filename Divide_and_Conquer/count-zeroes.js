/**
countZeroes

Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

Constraints:

Time Complexity: O(log N)

Examples:

countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0 */

// Binary Search
function countZeroes(arr, low = 0, high = arr.length - 1) {
	while (low <= high) {
		// get middle index
		let mid = Math.floor((high + low) / 2);

		// check if element at middle index is the first zero in the array. Returns the length (determining number of 0s)
		if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0)
			return arr.length - mid;
		// if it is not the first zero, call function again (recursion) for right side --> set low to middle index + 1
		if (arr[mid] === 1) return countZeroes(arr, mid + 1, high);

		// else recur for left side
		return countZeroes(arr, low, mid - 1);
	}
	return 0;
}

// Linear Search
// total = 0;

// function countZeroes(arr) {
//     for (let i of arr){
//         if (i === 0) {
//             total ++;
//     }
// }
// return total;
// }

module.exports = countZeroes;
