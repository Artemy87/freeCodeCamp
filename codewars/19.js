function peopleWithAgeDrink(old) {
  return (
    old <= 13 ? 'drink toddy' :
    old <= 17 ? 'drink coke' :
    old <= 20 ? 'drink beer' : 'drink whisky'
  )
};