"use strict"; //treat all js code as new version

//alert (3+3)   // we are using nodejs not browser so alert will not work
console.log(3 + 3);
console.log("Henry")

let name = "Henry"
let age = 18
let isLoggedIn = false
let state;


//PRImitive data types
//number = 2^53
//bigint = more than 2^53
//string = "hello" or 'hello' or `hello`
//boolean = true or false
//null = standalone value
//undefined = standalone value
//symbol = used to create unique identifiers for objects

//object
console.log(typeof "Henry"); //string
console.log(typeof 18); //number
console.log(typeof 9007199254741991n); //bigint
console.log(typeof undefined); // undefined
console.log(typeof null); //object