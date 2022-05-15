// add whatever parameters you deem necessary
/*
sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Examples:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
Constraints

Time Complexity - O(N + M)

*/
function sameFrequency(num1, num2) {
	if (num1.toString().length !== num2.toString().length) return false;

	let oneFreq = FrequencyCounter(num1);
	let twoFreq = FrequencyCounter(num2);

	for (let key of oneFreq.keys()) {
		if (!twoFreq.has(key)) return false;
		if (twoFreq.get(key) !== oneFreq.get(key)) return false;
	}
	return true;
}

function FrequencyCounter(num) {
	let frequencies = new Map();

	for (let int of num.toString()) {
		let intCount = frequencies.get(int) || 0;
		frequencies.set(int, intCount + 1);
	}
	return frequencies;
}
