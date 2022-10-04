//strings
const myVariable = "mathematics";

//The length property
//lenght
//.charAt()
//.indexOf('')
//.lastINdexOf('')
//.slice(from, to)
//.toUpperCase()
//.toLowerCase()
//.includes() returns boolean
//.splits('')

// console.log(myVariable.split(''))

//Numbers
const myNumber = 42 //not equal to "42"
//An integer is a whole number
//Both floats and integers are number data types
// true = 1, false = 0
const myFloat = 42.0
//Number methods
// Number.isInteger()
// Number.parseFloat()
//Number.toFixed()
// Number.parseInt()
// Number.toString()
// NaN not a number
// Number.isNaN()


console.log(Number.isNaN(myNumber))

//Math
//Math.PI
//Math.trunc() removes all decimal
//Math.round() rounds up or down
//Math.ceil() rounds up
//Math.floor() rounded down
//Math.pow(basenumber, exponent)
//Math.min() returns smallest
//Math.random()
//Math.max() returns highest

console.log(Math.floor(Math.random()*6))

// 
//test
const myname = "samahd"
const number = Math.floor(Math.random()*myname.length)

console.log(myname.charAt(number))

//if statement
//&&-AND ||-OR 
const soup = "chicken noodle soup"
const customerIsBanned = true;
let reply;
if(customerIsBanned){
    reply = "fuck outta here mate"
}else if(soup === "chicken noodle soup"){
 reply = `lucky day ay, we gat ${soup}`
}else{
    reply = "sorry fam we ain't gat no soup"
}

console.log(reply)

// switch
// rock paper scissor
switch(Math.ceil(Math.random()*3)){
    case 1:
        console.log(1)
        break;
    case 2:
        console.log(2)
        break;
    default:
        console.log(3)
}

//ternary operator - shorthand for if statement
let soup1 = true
let customerIsBanned1 = false
customerIsBanned1 ? 
console.log("fuck outta here mate") 
:!soup1
? console.log("no soup")
: console.log("Eat soup have joy")

//user input
//alert, prompt, confirm
//confirm-- ok ==true, cancel == false
// let name = prompt("enter your name")
// ?? - nullish coalescing operator
// console.log(name ?? "you didnt enter your nam")

// .trim() removes all whitespace

//loops
// while loop 
// while(myFloat){

// }

// //do while loop - does it atleast once
// do{

// }while(soup)

//for loop
//for (let i = 0; i < array.length; i++) {
//    const element = array[i];
    
//}

//function
// methods are built in functions


