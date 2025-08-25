const accountId = 144553
let accountEmail = "henry@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

accountEmail = "hc@hc.com" //that js is mutable and if you want to update the values. it is entirely possible.
accountPassword = "21212121"
accountCity = "Mumbai"
let accountState; //undefined - if you dont assign any value, it will be undefined

//js is mutable but const is immutablex

// accountId = 2 not allowed
//let does not have any restriction. you can update the value as many times as you want.
//dont use var. it is outdated, use let and const
//dont use var because of issue in block scope and functional scope

console.log(accountId); // that print the accountId for this file

console.table({ accountId, accountEmail, accountPassword, accountCity, accountState }); //print the table for this file
