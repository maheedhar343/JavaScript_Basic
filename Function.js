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