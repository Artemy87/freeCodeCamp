function arrayDiff(a, b) {
	let res = a;
	for (let i = 0; i < b.length; i++) {
		for (let j = 0; j < a.length; j++) {
			if (b[i] === a[j] && b[i] >= 0) {
				a.splice(j, j + 1);
			} else {
				a.splice(j, j - 1);
			}
		}
	}
	return res;
}