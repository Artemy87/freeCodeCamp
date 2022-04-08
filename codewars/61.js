sortme = function( names ){
	return names.sort((a, b) => b.toUpperCase() >= a.toUpperCase() ? -1 : 1)
}
