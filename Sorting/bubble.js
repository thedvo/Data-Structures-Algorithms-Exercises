function bubbleSort(arr) {
	// if you only have 1 loop, it only moves 1 element to the end.
	for (let i = 0; i < arr.length; i++) {
		let swapped = false; // this variable will stop our loop once all elements are sorted

		// we create a nested loop so we can loop through every element again
		for (let j = 0; j < arr.length - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				// if the current element is greater than it's next element, swap them
				let temp = arr[j]; // create temporary variable to hold the current element's value
				arr[j] = arr[j + 1]; // make the current element equal to the next element's value
				arr[j + 1] = temp; // set the next element to be the greater value saved to temp
				swapped = true;
			}
		}
		// if swapped is false after going through the loop that means we completely looped through the whole array
		if (!swapped) break;
	}
	// return the sorted array once done
	return arr;
}

// The algorithm for bubble sort requires a pair of nested loops. The outer loop must iterate once for each element in the data set (of size n) while the inner loop iterates n times the first time it is entered, n-1 times the second, and so on.

// After one loop of bubble sort, you are only guaranteed to have the last element in place. The second iteration will make sure the 2 last elements are in place, and the nth iteration will make sure the array is indeed sorted, resulting in n loops, which is achieved via a nested loop.

// [5, 4, 3, 2, 1]
// [4, 3, 2, 1, 5] ---> result of only 1 loop

module.exports = bubbleSort;
