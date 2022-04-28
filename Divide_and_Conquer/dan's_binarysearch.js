function binarySearch(arr, target, low = 0, high = arr.length - 1) {
	while (low <= high) {
		let mid = Math.floor(high + low / 2);

		if (target > arr[mid]) {
			return binarySearch(arr, target, (low = mid + 1), high);
		} else if (target < arr[mid]) {
			return binarySearch(arr, target, low, (high = mid - 1));
		}
		return mid;
	}
	return -1;
}
