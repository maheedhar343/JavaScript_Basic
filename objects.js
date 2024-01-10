// //object
// //sigleton 
// /*
// use valley we have two ways to declare object
// 1. using constructor
// 2. using literal

// => singleton is formed when we declare object using constructor
// => where as with literals we have multepul instances 
// */
// const mysym=Symbol("hi_everyone")
// var user={
//     name:"maheedhar",
//     age:21,
//     city:"Hyderabad",
//     "job role":"webdeveloper",
//     email:"maheedhar343@gmail.com",
//     listdays:["monday","friday"],
//     [mysym]:"Hello_EveryOne"
// }
// console.log(user);
// /*
// {
//   name: 'maheedhar',
//   age: 21,
//   city: 'Hyderabad',
//   'job role': 'webdeveloper',
//   email: 'maheedhar343@gmail.com',
//   listdays: [ 'monday', 'friday' ]
// }
//  */
// console.log(user.name);
// //console.log(user."job role");//Unexpected string
// console.log(user["job role"]);
// console.log(typeof(user.email));
// console.log(typeof(user['listdays'][0]));
// console.log(user.mysym);//undefined
// console.log(user[mysym]);//Hi_EveryOne
// console.log(typeof user[mysym]);//string

// //how to change values of object?
// user.age=22;
// console.log(user.age);//22
// //freasing object it means values i the object does not change
// Object.freeze(user)
// user.city="vadodara"
// console.log(user)
// /*
// {
//   name: 'maheedhar',
//   age: 22,
//   city: 'Hyderabad',
//   'job role': 'webdeveloper',
//   email: 'maheedhar343@gmail.com',
//   listdays: [ 'monday', 'friday' ],
//   [Symbol(hi_everyone)]: 'Hello_EveryOne'//=>[]since it is asymbol
// }*/

// //how to add new property in the existing object?

// user.newproperty="New property"
// console.log(user);
// /*
// {
//   name: 'maheedhar',
//   age: 22,
//   city: 'Hyderabad',
//   'job role': 'webdeveloper',
//   email: 'maheedhar343@gmail.com',
//   listdays: [ 'monday', 'friday' ],
//   [Symbol(hi_everyone)]: 'Hello_EveryOne'
// }*/
// //*note:  here property is not updates in user object since we freeze the
// let obj = {...user}; //creating a copy of the user object
// obj.newproperty ="New Property";
// console.log(obj);
// /*
// {
//   name: 'maheedhar',
//   age: 22,
//   city: 'Hyderabad',
//   'job role': 'webdeveloper',
//   email: 'maheedhar343@gmail.com',
//   listdays: [ 'monday', 'friday' ],
//   newproperty: 'New Property',
//   [Symbol(hi_everyone)]: 'Hello_EveryOne'
// }*/
// user.greeting=function(){
//     console.log("hi");
// }
// console.log(user.greeting);//[Function (anonymous)]

// user.greeting=function(){
//     console.log(`hi, ${this.name}`);
// }
// console.log(user.greeting())//hi, maheedhar
// console.log(user);
// /*
// {
//   name: 'maheedhar',
//   age: 21,
//   city: 'Hyderabad',
//   'job role': 'webdeveloper',
//   email: 'maheedhar343@gmail.com',
//   listdays: [ 'monday', 'friday' ],
//   greeting: [Function (anonymous)],
//   [Symbol(hi_everyone)]: 'Hello_EveryOne'
// }*/
// // dont ferget to unfreeze the object



// //Advance
// // const student=new Object();//singleton
// // const student={}//non singleton
// const student={
//     email:"maheedhar@gmail.com",
//     fullname:{
//         firstName:"maheedhar",
//         lastName:"reddy"
//     }

// }
// console.log(student.fullname);//{ firstName: 'maheedhar', lastName: 'reddy' }
// console.log(student.fullname.firstName);//maheedhar
// const ob1={
//     1:"hi",2:"hwllo"
// }
// const ob2={
//     3:"students",4:"teacher"
// }
// const ob3={ob1,ob2}
// console.log(ob3);//{ob1: { '1': 'hi', '2': 'hwllo' },ob2: { '3': 'students', '4': 'teacher' } }
// const ob4 = Object.assign({},ob1,ob2)
// console.log(ob4);//{ '1': 'hi', '2': 'hwllo', '3': 'students', '4': 'teacher' }
// const ob5 = {...ob1, ...ob2};
// console.log(ob5);//{ '1': 'hi', '2': 'hwllo', '3': 'students', '4': 'teacher' }


//object destructuring in javascript
const company={
    name : "TechMahendra",
    address : {
        street : "HB 6/11",
        city : "Hyderabad",
        country : "India"
        },
        contactNo : "+91-9876543210",
        website : "techmahendraraju.github.io"
}
const {website:web}=company
console.log(web);
const {address:{street:plot}}=company 
console.log(plot);