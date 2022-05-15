// add whatever parameters you deem necessary
/*

twoArrayObject
Write a function called twoArrayObject which accepts two arrays of varying lengths.The first array consists of keys and the second one consists of values. Your function should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values.

Examples:

twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
twoArrayObject(['x', 'y', 'z'], [1, 2]) // {'x': 1, 'y': 2, 'z': null}

*/

function twoArrayObject(keys, vals) {
	let obj = new Object();
	let i = 0;

	while (i < keys.length) {
		let value = i < vals.length ? vals[i] : null;
		obj[keys[i]] = value;
		i++;
	}
	return obj;
}

// function twoArrayObject(keys, values) {
// 	return keys.reduce((obj, cur, idx) => {
// 		obj[cur] = idx < values.length ? values[idx] : null;
// 		return obj;
// 	}, {});
// }

// for (let i = 0; i < keys.length; i++) {
// 	let value = i < vals.length ? vals[i] : null;
// 	obj[keys[i]] = value;
// }
