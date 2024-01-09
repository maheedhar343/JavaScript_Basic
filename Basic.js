// Datatypes
// ----------------------------------------------------------------------------

console.log(typeof 343);//number

console.log(typeof("maheedhar"));//string

console.log(typeof(NaN));//number

console.log(typeof(""));//string
console.log(typeof(n));//undifined
/*
* In JavaScript, datatypes are of two types 1.primitive 2. nonprimitive
* this is divided based on data how you store and access in memory
1.string            ||
2.number            ||
3.boolean           ||
4.null              ||primitive datatypes in js
5.undifined         ||
6.symbol            ||
7.BigInt            ||

====><=====
null vs undifined

Null in JavaScript means an empty value and is also a primitive type in JavaScript. 
The variable which has been assigned as null contains no value. Undefined, on the other hand, 
means the variable has been declared, but its value has not been assigned.

symbol
if you want to make something as unique
=============><==================
non-primitive (Reference)
1.Array
2.object
3.Function

*/
//  unseal way to declare string

let name="maheedhar"
let age=21
console.log(`hello everyone my name is ${name} ,I am ${age} old`);
//   another way too declare string
let fullName= new String('maheedhar')
console.log(fullName.length)//9
console.log(fullName.toUpperCase())//MAHEEDHAR
console.log(fullName.charAt(6));//h
console.log(fullName.indexOf("t"));//-1{since t is not present in our string}
// if we pass indexof() function more than one argument it will return first occurrence position
console.log(fullName.split("a"))//['m','heedh','r']
const s=name.slice(0,4)
console.log(s);//mahe
len=name.length
const re=name.slice(-9,-1);//maheedha
console.log(re);

//======Numbers=======
//NaN stands for Not A Number
console.log(Number.NaN); // NaN
// Infinity represents positive or negative infinity
console.log(Infinity); // Infinity
const score=100
console.log(typeof(score));
//another way of decleration
const balance=new Number(400)
console.log(balance);//[Number :400]
console.log(typeof(balance));//object
console.log(balance.toFixed(2));//400.00
console.log(score.toFixed(2));//100.00
console.log(balance.toPrecision(6));//400.000
const amount=1000000
console.log(amount.toLocaleString);//[Function: toLocaleString]
console.log(amount.toLocaleString());//10,00,000
//========math==========
console.log(Math);//object[Math]{}
console.log(Math.max(5,7));//7
console.log(Math.abs(-3));//3
console.log(Math.round(4.5));//5
console.log(Math.floor(4.8));//4
console.log(Math.ceil(4.3));//5
console.log(Math.sqrt(16));//4
console.log(Math.pow(4,2))//16
console.log(Math.random());//gives value between 0,1
console.log(Math.floor(Math.random()*10)+1);//it gives randum number between 1,9 
//if you want to get randum values between range of two numbers(10,20)then
let min=10;
let max=20;
console.log(Math.floor(Math.random()*(max-min+1)+min));
//=============Date and time==========
let d = new Date();
console.log(d.toString());//Mon Jan 08 2024 23:03:16 GMT+0530 (India Standard Time)
console.log(d.toISOString());//2024-01-08T17:34:54.252Z
console.log(d.toJSON())//2024-01-08T17:34:54.252Z

let mytime=new Date()
console.log(mytime.getMonth());
console.log(mytime.getYear());
console.log(mytime.getDay());
