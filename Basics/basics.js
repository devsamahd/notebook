import {regex} from "./regex.js"

console.log("hello world")

/* 1- this is a comment sample 
- as it stands it was the first thing I learnt 
- ctrl+? works fine too */


// 2- Variable
var word = "This is a string" // ES5 variable declaration
let word1 = "another string" //ES6
const num = 0 //ES6 - Read-only
word1 = num
// why var is bad
// In a small application,
// you might not run into this type of problem.
// But as your codebase becomes larger, 
// you might accidentally overwrite a variable that you did not intend to.
// Because this behavior does not throw an error, 
// searching for and fixing bugs becomes more difficult.

const res = regex()

    console.log(res)


