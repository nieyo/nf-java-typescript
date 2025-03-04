const numbers  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Ursprüngliches Array", numbers)
const doubledNumbers = numbers.map(num => num * 2)
console.log("Verdoppeltes Array", doubledNumbers)
console.log("")

const words = [
    "Informationen", "Rad", "Entwicklung", "Haus", "Buch",
    "Noch", "Tisch", "Garten", "Blumen", "Hut"
];
console.log("Ursprüngliches Array", words)
const wordsLongerThanFiveChars = words.filter(word => word.length > 5)
console.log("Wörter mit einer Mindestlänge von 6", wordsLongerThanFiveChars)
console.log("")

const numbers2 = [5, 23, 11, 46, 98, 13, 75, 28, 41, 67];
console.log("Ursprüngliches Array", numbers2)
const sumOfNumbers2 = numbers2.reduce((sum, number)=> sum + number, 0) // 0 is the start value for reduce()
console.log("Summe", sumOfNumbers2)
console.log("")

const numbers3 = [7, 23, 14, 39, 102, 56, 8, 91, 42, 17];
console.log("Ursprüngliches Array", numbers3)
const isSomeGreaterThanTen = numbers3.some(number => number > 10)
console.log("Ist eine der Zahlen größer als 10", isSomeGreaterThanTen)
console.log("")

// BONUS
const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];
const sortedList = list.slice().sort((a, b) => a - b) // slice to copy array as sort doesn't return a copy
const squaredList = list.map(number => number * number)
const removedHighLowList = list.slice().sort((a, b) => a - b).slice(2,-4) // list.length-4 == -4
const removedAllNotDividableByFour = list.filter(number => number % 4 === 0)

console.log("---- BONUS ----")
console.log("Ursprüngliche Liste", list)
console.log("Sortierte Liste", sortedList)
console.log("Liste mit quadrierten Zahlen", squaredList)
console.log("Liste ohne die 2 kleinsten und 4 größten Werte", removedHighLowList)
console.log("Liste mit nur durch 4 teilbaren Zahlen", removedAllNotDividableByFour)