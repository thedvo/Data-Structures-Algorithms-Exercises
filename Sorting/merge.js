function merge(arr1, arr2) {
	const results = [];
	let i = 0;
	let j = 0;

	// runs as long as pointers for i & j are in bounds
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}

	// once we exhaust 1 array, push all remaining values from the other array.
	// only 1 of the below loops will run depending on which array is not done
	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}
	return results;
}

// recursively split array into halves until you have arrays which are length of 0 or 1
function mergeSort(arr) {
	// base case. Stopped splitting array once length <= 1
	if (arr.length <= 1) return arr;
	const mid = Math.floor(arr.length / 2); // find midpoint to split array in half
	const left = mergeSort(arr.slice(0, mid)); // run mergeSort again to split the left side if length is still greater than 1
	const right = mergeSort(arr.slice(mid)); // run mergeSort again to split the right side if length is still greater than 1

	// Merge split arrays and return the merged sorted array.
	return merge(left, right);
}

module.exports = { merge, mergeSort };
