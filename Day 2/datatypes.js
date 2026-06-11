"use strict"//treat all js code as newer version
//datatypes in js
let name="Nandini" //string datatype
let age=20//number
let isLoggedIn=false//boolean
let state=null//standalone value
let city;//undefined

console.log(typeof state);
//typeof operator is used to find the datatype of a variable
console.log(typeof city);



//type conversion
let score=undefined;
console.log(typeof score);
console.log(typeof(score));
let convertedScore=Number(score)
console.log(typeof convertedScore);
console.log(convertedScore);

//any datatype in Boolean context
let isLoggedIn="Nandini"
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);//true because any non empty string is considered as true in boolean context


let isLoggedIn=""//empty string is considered as false in boolean context
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//conversion of number to string
let score=100
let stringScore=String(score)
console.log(stringScore);
console.log(typeof stringScore);