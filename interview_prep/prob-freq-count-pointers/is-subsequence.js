// add whatever parameters you deem necessary

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Constraints:

// Time Complexity - O(N + M)

function isSubsequence(str1, str2) {
	let str1Idx = 0;
	if (!str1) return true;

	// Loop through every character of string 2
	for (let i = 0; i < str2.length; i++) {
		// if the character of str2 equals the character of str1, increment forward.
		if (str2[i] === str1[str1Idx]) {
			str1Idx++;
			if (str1Idx === str1.length) {
				// Check if we have exhausted the pointer for str1. If we have, return True. This means we've looped through and matched all characters for str1.
				return true;
			}
		}
	}
	return false;
}
