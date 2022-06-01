// 6kyu: Mexican Wave

function wave(str) {
	let word = str.split('');
	let arr = [];

	for(let i = 0; i < str.length; i++) {
		let current = [...word];

		if(current[i] !== ' ') {
			current.splice(i, 1, current[i].toUpperCase());
			arr.push(current.join(''));
		}
	}

	return arr;
}

console.log(wave("hello Michael"));

