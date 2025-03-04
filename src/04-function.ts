const numbers  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Original Array: " + numbers)
const doubledNumbers = numbers.map(number => number * 2)
console.log("Doubled Array: " + doubledNumbers)
console.log("------------------------------------")

const words = [
    "Informationen", "Rad", "Entwicklung", "Haus", "Buch",
    "Noch", "Tisch", "Garten", "Blumen", "Hut"
];
console.log("Original Array: " + words)
const wordsLongerThanFiveChars = words.filter(word => word.length > 5)
console.log("Words with a min length of 6: " + wordsLongerThanFiveChars)
console.log("------------------------------------")

const numbers2 = [5, 23, 11, 46, 98, 13, 75, 28, 41, 67];
console.log("Original Array: " + numbers2)
const sumOfNumbers2 = numbers2.reduce((sum, number)=> sum + number, 0)
console.log("Sum: " + sumOfNumbers2)
console.log("------------------------------------")

const numbers3 = [7, 23, 14, 39, 102, 56, 8, 91, 42, 17];
console.log("Original Array: " + numbers3)
const isSomeGreaterThanTen = numbers3.some(number => number > 10)
console.log("Is some of the array greater than 10? " + isSomeGreaterThanTen)
console.log("------------------------------------")



