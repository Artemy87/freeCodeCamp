function disemvowel(str) {
	return str.split('')
		.filter(el => {
			return el.toLowerCase() !== 'a' &&
				(el.toLowerCase()) !== 'o' &&
				(el.toLowerCase()) !== 'e' &&
				(el.toLowerCase()) !== 'i' &&
				(el.toLowerCase()) !== 'u'
		}).join('')
}