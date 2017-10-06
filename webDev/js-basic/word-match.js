const match = (first, second) => {
	if (first.length != second.length) {
		return null;
	}
	const firstLowerCase = first.toLowerCase();
	const secondLowerCase = second.toLowerCase();

	let hash = [];
	for (let i = 0; i < firstLowerCase.length; i++) {
		hash[firstLowerCase.charAt(i) - 'a']++;
	}

	let count = 0;
	for (let i = 0; i < secondLowerCase.length; i++) {
		if (hash[secondLowerCase.charAt(i) - 'a'] > 0) {
			count++;
			hash[secondLowerCase.charAt(i) - 'a'] -= 1;
		}
	}
	return count;
};

module.exports = match;
