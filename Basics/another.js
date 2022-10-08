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
//getElementById

const view1 = document.getElementById("view")
console.log(view)
const view2 = document.querySelector('#view2')

//change styles
view1.style.display = "flex"
view2.style.display = "flex"

//getElementByClassName
const views = document.getElementsByClassName("view")
//returns HTMLCollection
console.log(views)

//querySelectorAll
const sendview = document.querySelectorAll('.view')

sendview.forEach(v => console.log(v))
//returns Nodelist
console.log(sendview)

//HTMLCollection has elements inside it
//NodeList has nodes, nodes can be whitespace or anything ie evrything on the DOM

const divs = view1.querySelectorAll("div")
//returns Nodelist
console.log(divs)
//get divs in different way

const sameDivs = view1.getElementsByTagName("div")
//returns HTMLCollection
console.log(sameDivs)

//little more specific with selectors //select just even divs
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)")
console.log(evenDivs)
for (let i = 0; i < evenDivs.length; i++) {
     evenDivs[i].style.background = "red"
}

//get element inside element 
  const navbar = document.querySelector("nav")
  const h1 = navbar.querySelector("h1")
  console.log(h1)
  h1.textContent = "Hello, fam!"

 
//   navbar.innerHTML = "<h1>Sup! Hommie</h1><h3>Another one</h3>"
  navbar.style.display = "flex"
  navbar.style.justifyContent = "space-evenly"

  console.log(evenDivs[0])
  console.log(evenDivs[0].parentElement)
  //children are actuaal elements
  console.log(evenDivs[0].parentElement.children)
  //child nodes arw everythng including space and all
  console.log(evenDivs[0].parentElement.childNodes)
  console.log(evenDivs[0].parentElement.hasChildNodes())
  console.log(evenDivs[0].parentElement.lastChild)
  console.log(evenDivs[0].parentElement.firstChild)
  console.log(evenDivs[0].parentElement.lastElementChild)
  console.log(evenDivs[0].parentElement.firstElementChild)
  console.log(evenDivs[0].nextSibling)
  console.log(evenDivs[0].nextElementSibling)
  console.log(evenDivs[0].previousElementSibling)
  console.log(evenDivs[0].previousSibling)


  //remove and add element
  view1.display = "none"
  view2.display = "flex"
  view2.style.flexDirection = "row"
  view2.style.flexWrap = "wrap"
  view2.style.margin = "10px"

  while(view2.lastChild){
    view2.lastChild.remove()
  }

const createDivs = (parent, iter) =>{
    const newdiv = document.createElement("div")
    newdiv.textContent = iter
    newdiv.style.backgroundColor = "#000"
    newdiv.style.width = "100px"
    newdiv.style.height = "100px"
    newdiv.style.margin = "10px"
    newdiv.style.justifyContent = "center"
    newdiv.style.alignItems = "center"
    parent.append(newdiv)
}
// createDivs(view2, 10)
for (let i = 0; i < 12; i++) {
    createDivs(view2, i)    
}

//Event Listener: syntax - addEventListener(event, function, useCapture)



// document.removeEventListener("click", (event)=>{
//  doesnt work for anonymous functions like you've created here
// })
// document.addEventListener("readystatechange", (e)=>{
//      if(e.target.readyState === "complete"){
//         console.log("readyState: Complete")
//         initApp()
//      }
// })

// const initApp = () => {
//     document.addEventListener("click", (event) => {
//         console.log(event.target)
//         event.target.textContent = "wabble wabble"
//         event.target.style.backgroundColor = "pink"
//     })
// }


// event bubbling
// events can bubble if for example h1 inside navbar and both have eventelistener, the inner most element being clicked will trigger other parent event listeners
navbar.addEventListener('click', (e)=>{
    navbar.style.backgroundColor = "orange"
})
h1.addEventListener('click', (e)=>{
    e.stopPropagation() //stops bubbling
    h1.style.backgroundColor = "white"
})


// don't use e.target
// // add class to element

// Element.classList.add()
// Element.classList.remove()

// //instead
// Element.classList.toggle('class name')
// Element.classList.toggle('class name')

// prevent default
//  const view3 = document.querySelector("view3")
//  const myform = view3.querySelector("myform")
//  myform = view3.querySelector('submit', (e)=>{
//     e.preventDefault() //prevent browser reload which is default when form is submitted
//     console.log("submit event")
//  })

 
//Web storage API

//Not part of the DOM
//Available to JS via global variable: window
//we don't have to type window.
//session storage closes when browser is closed
const myobj = {
    name: "samahd",
    logname: function(){
        console.log(this.name)
    }
}

const myarr = ["eat", "sleep", "code"]

sessionStorage.setItem("mysessionstore", JSON.stringify(myobj))
const mysessdata = sessionStorage.getItem("mysessionstore")
console.log(JSON.parse(mysessdata))
//session storage only stores strings sp use JSON stringify and parse for both array and object


//local storage - persistent data storage
localStorage.setItem("mylocalstore", JSON.stringify(myobj))
// localStorage.removeItem("mylocalstore")
// localStorage.clear() - works for session too
const key = localStorage.key(0)
const storelt = localStorage.length
const mylocalstore = localStorage.getItem("mylocalstore")
console.log(JSON.parse(mylocalstore), key, storelt)

//modules
//use type="module" in html to use modules
//auto applies strict mode "use strict"
//export {exportmodule}
//export default playguitar
// import exportmodule from './path'
// import {something as newthng} from './path'
// import * as allof from "./path"


//Higher order functions
//A higher order functions is a that does atleast one of
// Take one or more function as a parameter (arg)
// Return a function as the result

//foreach()
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response => response.json())
// .then(json => console.log(json))

const data = [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
  {
    "userId": 1,
    "id": 6,
    "title": "dolorem eum magni eos aperiam quia",
    "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
  },
  {
    "userId": 1,
    "id": 7,
    "title": "magnam facilis autem",
    "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
  },
  {
    "userId": 1,
    "id": 8,
    "title": "dolorem dolore est ipsam",
    "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
  },
  {
    "userId": 1,
    "id": 9,
    "title": "nesciunt iure omnis dolorem tempora et accusantium",
    "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
  },
  {
    "userId": 1,
    "id": 10,
    "title": "optio molestias id quia eum",
    "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
  }]


  data.forEach(post => {
        console.log(post)
  })   
  console.clear()

  //filter
  const filterPost = data.filter(post => {
    return post.userId === 1;
  })

  console.log(filterPost)

  //map
  const mappedpost = filterPost.map(post => {
    return post.id * 10;
  })
  console.log(mappedpost)

  //reduce
  const reducedpost = mappedpost.reduce((sum, post)=> {
    return sum + post;
  })
  console.log(reducedpost)

// Fetch, Callbacks, promises, thenables, and Async/Await

//promises - asynchronous js
// 3 state - pending, fulfiled, rejected

const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if(!error) {
        resolve("resolved promise")
    }else{
        reject("rejected")
    }
})

const mySecondpromise = new Promise((res, rej)=>{
    setTimeout(()=>{
        res("my next promise resolved")
    }, 3000)
})

//Thenables - .then
mySecondpromise.then(data => console.log(data)).catch(err => console.warn(err))
myPromise.then(data => console.log(data)).catch(err => console.warn(err))

// fetch 😭 atlast
const users = fetch('https://jsonplaceholder.typicode.com/users')

//pending state
// console.log(users)
.then(data => data.json())
.then(json =>{
    json.forEach(users => {
        console.log(users.name)
    }) 
})

//Async - Await
const myUSers = {
    userList: []
}

const myCoolfunc = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const jsondata = await res.json()
    console.log(jsondata)
    return jsondata
}


myCoolfunc();
const updateuser  = async() => {
 const data = await myCoolfunc()

    myUSers.userList = data

 console.log(myUSers)
}

updateuser()

//example- workflow function
const getemails = async(id) => {
    const ge = await fetch('https://jsonplaceholder.typicode.com/users')
    const yeah = await ge.json()
    const email = yeah.map(res => {return res.email})
    console.log(email)
}

getemails()

//2nd param of fetch is a object
const joke = {
    id:"1",
    joke: "Why does a llama and kendrick lama have in common, They spit"
}
const dadjoke = async(joke) => {
    const res = await fetch("https://httpbin.org/post",{
    method: "POST",
    headers: {
        // Accept: "application/json"
        "Content-Type": "application/json"
    },
    body: JSON.stringify(joke)
    })
    const jsonres = await res8.json()

    console.log(jsonres)
}
dadjoke(joke)