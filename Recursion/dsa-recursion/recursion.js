/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
	// Base Case
	if (i === nums.length) return 1;
	// Normal Case
	return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, longestWord = 0) {
	// Base Case
	if (i === words.length) return longestWord;
	// Normal Case
	longestWord = Math.max(words[i].length, longestWord);
	return longest(words, i + 1, longestWord);
}

/*
let longest = words[0];
	for (let i = 1; i < words.length; i++) {
		if (words[i].length > longest.length) {
			longest = words[i];
		}
	}
	return longest.length;
*/

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, newStr = '') {
	// Base Case
	if (i >= str.length) return newStr;
	// Normal Case
	return str[i] + everyOther(str, i + 2, newStr);
}

/* 
function everyOther
let newStr = ''
while (i <= str.length -1){
	newStr += str[i];
	i += 2;
}
return newStr;
*/

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
	let left = i;
	let right = str.length - i - 1;

	if (left >= right) return true; // should be true since you went through every letter without returning false
	if (str[left] !== str[right]) return false;

	return isPalindrome(str, i + 1);
	// i + 1 will help iterate left index forward and right index backwards until left >= right
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
	if (i === arr.length) return -1; // iterated through every value and could not find val
	if (arr[i] === val) return i;
	return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1) {
	// Base Case
	if (i < 0) return '';
	// Normal Case
	return str[i] + revString(str, i - 1);
}

// function revString(str, i = 0, newStr = '') {
// 	if (newStr.length === str.length) return newStr;
// 	newStr += str[str.length - 1 - idx];
// 	return revString(str, idx + 1, newStr);
// }

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
	let strings = [];
	// create empty array which will take all string values

	for (let key in obj) {
		if (typeof obj[key] === 'string') strings.push(obj[key]); // push to strings array if element is a string
		if (typeof obj[key] === 'object') strings.push(...gatherStrings(obj[key])); // for nested objects, recur the function with the rest of the elements
	}
	return strings;
	// return strings array once the loop is complete
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

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

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch,
};
