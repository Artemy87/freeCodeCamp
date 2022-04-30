// Функция возвращает true, если наибольший(если больше одного элемента) нечетный элемент массива больше,
// чем любой из четных элементов массива, иначе возвращает false.

function isOddHeavy(n) {
	let cur = Math.max(...n.filter(el => el % 2 !== 0))
	return cur > Math.max(...n.filter(el => el !== cur))
}

const result = isOddHeavy([3, 4, 8, 10, 13])

console.log(result)