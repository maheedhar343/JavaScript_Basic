//tacking user input 
//npm i prompt-sync
const prompt = require('prompt-sync')();
const {cube_val,cuboid_val}=require("./math_exp")
const side = prompt('enter side of the cube');
console.log(`Hey there ${side}`);

//using external user difine methods 

console.log(cube_val(side));
console.log(cuboid_val(2,3,4));
