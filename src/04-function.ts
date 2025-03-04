const numbers  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const doubledNumbers = numbers.map(num => num * 2)

const words = [
    "Informationen", "Rad", "Entwicklung", "Haus", "Buch",
    "Noch", "Tisch", "Garten", "Blumen", "Hut"
];
const wordsLongerThanFiveChars = words.filter(word => word.length > 5)

const numbers2 = [5, 23, 11, 46, 98, 13, 75, 28, 41, 67];
const sumOfNumbers2 = numbers2.reduce((sum, number)=> sum + number, 0) // 0 is the start value for reduce()

const numbers3 = [7, 23, 14, 39, 102, 56, 8, 91, 42, 17];
const isSomeGreaterThanTen = numbers3.some(number => number > 10)

console.log("Ursprüngliches Array", numbers)
console.log("Verdoppeltes Array", doubledNumbers)
console.log("")
console.log("Ursprüngliches Array", words)
console.log("Wörter mit einer Mindestlänge von 6", wordsLongerThanFiveChars)
console.log("")
console.log("Ursprüngliches Array", numbers2)
console.log("Summe", sumOfNumbers2)
console.log("")
console.log("Ursprüngliches Array", numbers3)
console.log("Ist eine der Zahlen größer als 10", isSomeGreaterThanTen)
console.log("")



// BONUS
const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];
const sortedList = list.slice().sort((a, b) => b - a) // slice to copy array as sort doesn't return a copy
const squaredList = sortedList.map(number => number * number)
const removedHighLowList = squaredList.slice(4,-2) // list.length-2 == -2
const removedAllDivisibleByFourList = removedHighLowList.filter(number => number % 4 !== 0)
const sumOfList = removedAllDivisibleByFourList.reduce((sum, number)=> sum + number, 0)

console.log("---- BONUS ----")
console.log("Ursprüngliche Liste", list)
console.log("Absteigend sortierte Liste", sortedList)
console.log("Liste mit quadrierten Zahlen", squaredList)
console.log("Liste ohne die 2 kleinsten und 4 größten Werte", removedHighLowList)
console.log("Liste ohne durch 4 teilbare Zahlen", removedAllDivisibleByFourList)
console.log("Summe der verbleibenden Zahlen", sumOfList)