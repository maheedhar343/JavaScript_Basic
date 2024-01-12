function sum(num1,num2){
    return num1+num2
}
let add=sum(2,3);
console.log(sum);//[Function: sum]
console.log("result :",add);//result : 5
let case1=sum("2",3);
console.log(case1);//23
// case1:first element is string and js consider second elemrnt is also string
let case2=sum(2,"3")
console.log(case2) //23
//where as in case2 first element is num but secind element is string


//another way to take parameters
function greating(name){
    return `good wishes to all by ${name}`
}
console.log(greating("maheedhar"));


//if user enter doesnot enter any name
function game(favourite){
    if (!favourite){
        console.log("please enter any game name");
        return
    }   
    return `my favourite game is ${favourite}`
}
console.log(game())

//what if you want to give default value
function work(profession="developer"){
    return `hi are you a ${profession}`
}
console.log(work())
//when we observe shoping webs like amazon we had option of add to cart there we can't predect number of items
function num(...num){
    return num
}
console.log(num(1,2,2,3));

//how to access objects
const user={
    name:"uday",
    prise:300
}
function shop(any_user){
    return `name of the user is ${any_user.name} he shoped for ${any_user.prise}`
}
console.log(shop(user))

//how to access arrays
const arr=[5,6,7];
function element(arr){
    console.log(arr[1])
}
element(arr)



//this Keyword
/* In JavaScript, the this keyword is a special variable that is automatically created and updated in
the context of a function. The value of this depends on how a function is invoked, and it provides a 
way for functions to reference the object they are being called on or the context in which they are 
executed. The behavior of this can be a source of confusion, especially in different contexts. 
Here are the main rules governing the behavior of the this keyword in JavaScript:

Global Context:
In the global context (outside of any function), this refers to the global object. In a web browser, 
the global object is usually the window object.*/

const custimer={
    Name:"Maheedhar",
    cart:["laptop","mouse","keyboad"],
    prise:200000,
    bill:function pay(){
        console.log(`hello ${this.Name} your bill is ${this.prise.toLocaleString()}`);
    }
} 
custimer.bill()
custimer.Name="naveen";
custimer.bill()

//if write this keyword in function it gives us a lot of matadata 
function world(){
    console.log(this);
}
world()
/*<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 104.84089994430542,
      nodeStart: 4.322799921035767,
      v8Start: 9.746299982070923,
      bootstrapComplete: 46.848299980163574,
      environment: 24.749199986457825,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1705078871767.779
  },
  fetch: [AsyncFunction: fetch]
}*/
//if we access any varable in the function this keyword cont find that since it cont access that
function man(){
    let Name_man="praneeth"
    console.log(this.Name_man);
}
man()//undefined

function boy(){
    Name_man="praneeth"
    console.log(this.Name_man);
}
boy()
//this will print praneeth since if we do't finine any thing before varable it takes var as default since it is a global varable it prints

//Arrow function
//basic structure of arrow function
const addnums=(num1,num2) => {
    return num1+num2
}
console.log(addnums(3,4))
//we can do it in one line
const sub=(num1,num2)=> num1-num2
console.log(sub(6,1));

//IIFE: Immediately Invoked Function Expression
//if we want to invoke a function whith out calling by it's but function it self
(divide=(dive,divi)=>console.log(dive/divi))(10,2)
//why we use IIFE?
//sometimes becouse of global scope polution may accur to avoid that we use IIFE
