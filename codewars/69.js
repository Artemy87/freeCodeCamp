// 7kyu: Sort by Last Char

function last(x){
	return x.split(' ').sort((a, b) => {
		if(a.slice(-1) < b.slice(-1)) { return -1 };
		if(a.slice(-1) < b.slice(-1)) { return 1 };
	})
}

last('man i need a taxi up to ubd');

	// output: ['a', 'need', 'ubd', 'i', 'taxi', 'man', 'to', 'up']
