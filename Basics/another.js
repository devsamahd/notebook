"use strict"
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
const myfunc = () => {
    //myfunc
}

//scope
//just use const and let

//
// array
const myArray = [];
//array method
// .length
// myArray[0]
// .push(), add to the back
// .pop() remove from the back
// .unshift() add to the beginning of the array
// .shift() ermoving from the front of the array
// .splice(begin, number of items to delete, replace(optional)) remove or replace values
// .splice(1,0, 42) add 42 to position 1
// .slice(2) delete everythng befroe 2nd position
// .slice(start, end(optional))
// .reverse() reverse normally
// .join() creates new string
// .join("") removes comma and joins array
// .split() splits to array
// .split("" split anywhere you see comma)
// .concat() joins arrays
// myArrayA.concat(myArray2) joins myArray A and B
// use spread operator insstead of cooncat
// [...myArrayA, ...myArrrayB] spread elements in an array into the new array


// reload browser - location.reload()



//objects
const aLargeObject = {
    alive: true, //Boolean
    answer: 45, //number
    hobbies: ["coding","Reading","not Reading too😅"], //array
    beverage: {
        soda: "coke",
        juice: "pulpy orange"
    }, // nested object
    action: function(){
        return `Time for some ${this.beverage.soda}`
    }  //methods, does not support arrow function
}
console.log(aLargeObject.action())

const vehicle = {
    wheels: 4,
    engine: function(){
        return "vooooom!";
    }
}

const truck = Object.create(vehicle) //Inheritance
truck.doors = 2
truck.engine = function() {
    return "zoooo"
}  //override inherited property
console.log(truck.wheels)
console.log(truck.engine())

const teslaTruck = Object.create(truck)
teslaTruck.engine = function() {
    return "hmmmmmm"
}

console.log(teslaTruck.engine())

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "JohnbPaul Jonees",
    drums: "John Bonham"
}

band.keyboards = "samahd"
console.log(Object.keys(band))  //logs all keys
Object.values(band) // log all values

// for loop for objects
for (let job in band){
    console.log(`On ${job} is ${band[job]}`)
}

// delete property in object
// delete band.vocals
// check if property exists in object
// console.log(band.hasOwnProperty('vocals'))


//destructuring objects
const {vocals, drums} = band
//same as {realname: newname} = Objectname
console.log(vocals)

//JavaScript Classes
class Pizza {
    constructor(pizzaTyle){
        this.type = pizzaTyle
        this.size = "medium"
        this.crust = "original"
        this.toppings = []
    }
    get pizzaCrust(){
        return this.crust   //getter
    }
    set pizzaCrust(newcrust){
        this.crust = newcrust   //setter
    }
    //using method approach
    getSize(){
        return this.size
    }
    setSize(newsize){
        this.size = newsize
    }
    getToppings(){
        return this.toppings
    }
    setToppings(newTopping){
        this.toppings.push(newTopping)
    }
    bake(){
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza`)
    }
}

const myPizza = new Pizza("pepperoni") //instantatiate
myPizza.pizzaCrust = "thin"
myPizza.setSize("XL")
myPizza.setToppings("sausage")
myPizza.bake()
console.log(myPizza.pizzaCrust, myPizza.getSize(), myPizza.getToppings()[0])



//Car class
class Vehicles {
    constructor(carType, carEngine, carSpeed){
        this.type = carType
        this.engine = carEngine
        this.speed = carSpeed
    }
    getType(){
        return this.type
    }
    setType(carType){
        this.type = carType
    }
}

class SUV extends Vehicles{
    constructor(carType, carEngine, carSpeed){
        super(carType, carEngine, carSpeed)
        this.carType = "teslaTruck"
        this.carEngine = "v9"
        this.carSpeed = "900KMH"
    }
    slice(){
        console.log(`New ${this.carType} has ${this.carEngine} at ${this.carSpeed}`)
    }
}

const vv = new SUV
vv.slice()
//this._varname tell others the var should only be modified in the class but it can still be modified with dot notation


//factory function - another way to create an object
function cakeFactory(cakeSize) {
    const crust = "original"
    const size = cakeSize
    return {
        bake: () => console.log(`Baking a ${size} ${crust} cake`)
    }
}
const myCake = cakeFactory("small")
myCake.bake()


//Just been added - doesn't have 100% support
//Classes now support public and private fields

class House{
    //public field
    landSize = "2 Acre"
    //private field
    #mainBuildingSize = "1 Acre"
    #rooms
    constructor(roomnums){
        
        this.#rooms = roomnums;
    }
    getRooms(){
        return this.rooms
    }
    setRooms(newRoom){
        this.#rooms = newRoom
    }
    audit(){
        console.log(`The land covers ${this.landSize} and the main building covers ${this.#mainBuildingSize} and has ${this.#rooms} rooms`)
    }
}

const house = new House(5)
house.audit()
house.setRooms(6)
house.audit()

//check canIuse to check for support

//JSON - Javascript Object Notation
const newObj = {
    name: "samahd",
    hobbies: ["eat", "code", "read"],
    hello: function (){
        console.log("Hello! I'm codehanz")
    }
}

console.log(typeof newObj)
const convtojson = JSON.stringify(newObj)
//JSON doesn't send methods/functions and when you parse it is gone
//JSON is string type
//parse to turn back to object

const backtoobj = JSON.parse(convtojson)
console.log(typeof convtojson, convtojson, backtoobj)

const variable = "samahd"
console.log(variable)

//errors
//reference error: variable not defined
//syntax error: unexpectable syntax
//TypeError: trying to reassign const


const makeerror = () =>{
    try{
        throw new Error("Na error")
    }catch(err){
        //console.warn()
        //console.log()
        //console.table()
        //err.stack || err.message || err.type are accessible
        console.error(err.stack)
    }finally{ //executes no matter what
        console.log("I go still log anyhow")
    }
}
//code in try block won't execute if there's error in the block

// makeerror()

function customError(message){
    this.message = message
    this.name = "customError"
    this.stack = `${this.name}: ${this.message}`
}


//continue at DOM