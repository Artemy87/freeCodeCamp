function howManyGifts(maxBudget, gifts) {
	let budget = maxBudget;
	gifts.sort((a, b) => a - b);
	let result = 0;
	for (let i = 0; i < gifts.length; i++) {
		if (budget > 0 && budget >= gifts[i]) {
			budget -= gifts[i];
			result += 1;
		}

	}
	return result;
}