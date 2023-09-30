"use strict";//treat all js code as newer version 


// alert("Hello Prince") //We are using nodeJs not browser so we cant use alert syntax this way


// console.log(3
//     +

//     3) //code readability should be high


// datatypes in Js

// primitive and non primitive

/*Primitive Data Type
Numbers/Int      returns/typeof:number
Big Int          returns/type of:bigInt
Strings          returns/type of:String 
Boolen          returns/type of:Boolean
Null            returns/type of:object(a kind of bug in js)
Undefined       returns/type of:undefined
Symbol           returns/tyoeof:symbol

Non Primitive Data type

Object-used to store collection of data

*/

let num=123
let str="Prince"
let isName=true
let x=null
let sym=Symbol("symbol")
let z=undefined

console.table([num,str,isName,x,sym,z])

console.log(typeof num)  //number
console.log(typeof str) //string
console.log(typeof isName) //boolean
console.log(typeof x) //object
console.log(typeof sym) //symbol
console.log(typeof z)//undefined


