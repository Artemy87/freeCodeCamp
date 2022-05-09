// 7kyu: You're a square!

let isSquare = n => Number.isInteger(Math.sqrt(n))

// or

let isSquare2 = n => Math.sqrt(n) % 1 === 0;