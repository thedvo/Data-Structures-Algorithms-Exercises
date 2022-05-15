// add whatever parameters you deem necessary

/* constructNote
 Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

 Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

 Constraints:

 Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

 Examples:
 constructNote('aa', 'abc') // false
 constructNote('abc', 'dcba') // true
 constructNote('aabbcc', 'bcabcaddff') // true

*/

function constructNote(message, letters) {
	// if (!letters) return false;

	let messageFreq = createFrequencyCounter(message);
	let letterFreq = createFrequencyCounter(letters);

	for (let key of messageFreq.keys()) {
		if (!letterFreq.has(key)) {
			// if the letters Map does not have the key, return False.
			return false;
		}
		if (
			messageFreq.get(key) !== letterFreq.get(key) &&
			messageFreq.get(key) > letterFreq.get(key)
			// if the frequency of the key does not match AND the message frequency is greater, return False.
			// meaning the letters map doees not have enough letters to satisfy the message
		) {
			return false;
		}
	}
	return true;
}

function createFrequencyCounter(str) {
	let frequencies = new Map();

	for (let char of str) {
		let charCount = frequencies.get(char) || 0;
		frequencies.set(char, charCount + 1);
	}
	return frequencies;
}

// Determine if you can create the message with the given string of letters.
// Inputs --> message, letters
// Outputs --> True/False

// Check if the letters from letters string are in the message string
