// Primitive
// 7 types : String,Number,Boolean,Null,undefined,S node 01_basics/04_comparison.jsymbol,BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn  = false
const outsideTemp = null

let userEmail = undefined;
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);
// const bigNumber = 34536567543524542n

// Reference (Non Primitive)

// Array, Objects,Functions

const heros = ["Raunak","Shaktimaan", "Doga"]
let myObj ={
    name:"Raunak",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World!");
}

// console.log(typeof outsideTemp);
//output is object

console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof Symbol);
