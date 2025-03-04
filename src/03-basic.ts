// AGE
let age: number = 3
console.log("age: " + age)

for (let i: number = 1; i <= age; i++) {
    console.log(i + "\r")
}

if (age >= 18) {
    console.log("you are full age")
} else {
    console.log("you are under age")
}
console.log("------------------------")

// SCORE
let score: number = 115
console.log("score: " + score)

if (score != 0) {
    console.log("Score is available.")
}

if (score) {
    console.log("Score is evaluated as truthy.")
} else {
    console.log("Score is evaluated as falsy.")
}
console.log("------------------------")

// USERNAME
let username: string = "jonas"
console.log("username: " + username)

if (username !== "") {
    console.log("Username is available.")
}

if (username) {
    console.log("Username is evaluated as truthy.")
} else {
    console.log("Username is evaluated as falsy.")
}
console.log("------------------------")

// ADMIN
let isAdmin: boolean = false
console.log("isAdmin: " + isAdmin)

if (isAdmin) {
    console.log("isAdmin is evaluated as truthy.")
} else {
    console.log("isAdmin is evaluated as falsy.")
}

if (!isAdmin) {
    console.log("isAdmin is false.")
}
console.log("------------------------")



// -----
// BONUS
// -----

christmasTree(5)

function christmasTree(number: number): void {

    // 'triangle', going through the individual line
    for (let i: number = 0; i < number; i++) {
        let line: string = "" // Reset line for each iteration

        // add stars
        for (let j: number = 0; j < 2 * i + 1; j++) { // next odd number every line
            line += "*"
        }

        // add spaces
        for (let k: number = 0; k < number - i - 1; k++) { // spaces on each side, no spaces in the last line
            line = " " + line + " "
        }

        console.log(line)
    }

    // build trunk
    let trunk: string = ""
    for (let j:number = 0; j < number - 1; j++) { // fill half line -1 with spaces
        trunk += " "
    }
    trunk += "#" // add 'trunk' char
    for (let i:number = 0; i < number; i++) {
        console.log(trunk)
    }
}








