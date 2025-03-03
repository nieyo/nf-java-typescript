// AGE
let age:number = 3
console.log("age: " + age)

for (let i:number = 1; i <= age; i++) {
    console.log(i + "\r")
}

if (age >= 18) {
    console.log("you are full age")
} else {
    console.log("you are under age")
}
console.log("------------------------")

// SCORE
let score:number = 115
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
let username:String = "jonas"
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
let isAdmin:boolean = false
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











