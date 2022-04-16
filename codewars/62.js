function squareDigits(num){
	return +(String(num)
		.split('')
		.map((el) => el * el)
		.join(''));
}