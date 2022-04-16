function highAndLow(numbers) {
	let a = numbers.split(' ');
	let b = a.map(el => +el)

	let min = Math.min(...a);
	let max = Math.max(...a)


	return `${max} ${min}`;
}