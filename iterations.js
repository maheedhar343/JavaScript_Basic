//simple for loop
array=[1,2,3,4]
for (let index = 0; index < array.length; index++) {
    console.log(array[index]) 
}
//simple while loop
i=0 
while(i<5){
    console.log(array[i]);
    i++
}
//for eachloop
for (const value of array) {
    console.log(value);
}
//Map {which contain data as object(key:value pair) and on looping maintains the sequence but skip the duplicates}
const map = new Map()
map.set("ap","andhra pgradesh")
map.set("ts","Hyderabad")
map.set("ap","Arunachal Pradesh")
map.set("mh","Mumbai")
map.set("up","Uttar Pradesh");
//note: key "ap" is repeated, so the value of that key will be overwritten by the next value  for the same key.(key should be unique it follow the and condesion not or)
//for of  loop to iterate over the key value pairs in a map object
for (let index of map.entries( )) {
    console.log(`${index} `)
}
// ap,Visakhapatnam 
// tg,Hyderabad
// assam,Arunachal Pradesh

for (let [i,j] of map.entries()) {
   console.log(`Key: ${i} , value: ${j}`);
}
// Key: ap , value: Visakhapatnam
// Key: tg , value: Hyderabad
// Key: assam , value: Arunachal Pradesh

for(let [i]  of map.entries()) {
    console.log(`Key only : ${i}`);
}
// Key only : ap
// Key only : tg
// Key only : assam


//object looping forin

let obj={
    j:"java",
    js:"javascript",
    py:"python",
    cpp:"c++"
}
for (const key in obj) console.log(`${key} is the shotcut of ${obj[key]}`);

// j is the shotcut of java
// js is the shotcut of javascript
// py is the shotcut of python
// cpp is the shotcut of c++


//foreach loop

languages=["telugu","hindi","english","tamil","kannada","malayalam"]
festivals=["ugadi","onam","Maha Shivratri","sankranthi"]
languages.forEach(element =>console.log(element));
// telugu
// hindi
// english
// tamil
// kannada
// malayalam

//we can also make it possible by refffering ti some userdifine function 

print=(item)=>console.log(item)
languages.forEach(print);
festivals.forEach(print);

// telugu
// hindi
// english
// tamil
// kannada
// malayalam
// ugadi
// onam
// Maha Shivratri
// sankranthi

let people=[{
    name:"John",
    age:30,
},{
    name:"Rahul",
    age:32,
},{
    name:"Sara",
    age:28,
}]
people.forEach((i)=>console.log(i.name))
// John
// Rahul
// Sara

let numbers=[1,2,3,4,5,6,7,8,9,10]

let newnum=numbers.filter((i)=>i>6)
    console.log(newnum);

let num=numbers.find((i)=>{
    i<5
})
console.log(num);//undefined
//Note:we have to return the value from inside of find() method 

let rnum=numbers.filter((i)=>{
    return i%2==0;
})
console.log(rnum);//[ 2, 4, 6, 8, 10 ]


// using map function to add 10 to every num in array
let added_nums = numbers.map((i) => i + 10);
console.log(added_nums);
 [
    11, 12, 13, 14, 15,
    16, 17, 18, 19, 20
  ]

// map chaining 

let  squared = numbers.map((i) => i * i).reduce((a, b) => a + b);

//using fureach add a num to every element in array
numbers.forEach((i) =>console.log(i+2))
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
//it gives the sum of all the elements in the array
array_sum=numbers.reduce((a,b)=>a+b)
console.log(array_sum);
//55

num_arr2=[2,4,6];
// array_sum2=num_arr2.reduce((a,b)=>{
//   console.log(`accumalater: $ {a} , current val : ${b}`);
//   return a+b
// },5)

//we can write the same thing as
array_sum2=num_arr2.reduce((a,b)=>a+b,5)
console.log(array_sum2);

// accumalater: 5 , current val : 2
// accumalater: 7 , current val : 4
// accumalater: 11 , current val : 6
// 17

//shoping cart
const items=[{
  name: 'apple',
  price:100
},
{
  name:"mango",
  price:89,
},{
  name:'banana',
  price:30
}]
let totalCost =items.reduce((gst,item)=>gst + item.price,5)
console.log("Total cost is "+totalCost);

// Total cost is 224

let BooksData=[
    
        {
          "title": "The Catcher in the Rye",
          "genre": "Realistic Fiction",
          "published": "1951",
          "edition": "Multiple"
        },
        {
          "title": "To Kill a Mockingbird",
          "genre": "Southern Gothic",
          "published": "1960",
          "edition": "Multiple"
        },
        {
          "title": "Pride and Prejudice",
          "genre": "Romance",
          "published": "1813",
          "edition": "Multiple"
        },
        {
          "title": "The Great Gatsby",
          "genre": "Tragedy",
          "published": "1925",
          "edition": "Multiple"
        },
        {
          "title": "Jane Eyre",
          "genre": "Gothic",
          "published": "1847",
          "edition": "Multiple"
        },
        {
          "title": "The Lord of the Rings",
          "genre": "Fantasy",
          "published": "1954-1955",
          "edition": "Multiple"
        },
        {
          "title": "The Hobbit",
          "genre": "Fantasy",
          "published": "1937",
          "edition": "Multiple"
        },
        {
          "title": "Harry Potter and the Philosopher's Stone",
          "genre": "Fantasy",
          "published": "1997",
          "edition": "Multiple"
        },
        {
          "title": "Animal Farm",
          "genre": "Political Satire",
          "published": "1945",
          "edition": "Multiple"
        },
        {
          "title": "1984",
          "genre": "Dystopian",
          "published": "1949",
          "edition": "Multiple"
        }
      ];
  let userBook=BooksData.filter((bp)=>bp.published>"1990")
  console.log(userBook);
//   [
//     {
//       title: "Harry Potter and the Philosopher's Stone",
//       genre: 'Fantasy',
//       published: '1997',
//       edition: 'Multiple'
//     }
//   ]
userBook =BooksData.filter((bg)=>{return bg.genre==="Southern Gothic"})
console.log(userBook);
//  [
//     {
//       title: 'To Kill a Mockingbird',
//       genre: 'Southern Gothic',
//       published: '1960',
//       edition: 'Multiple'
//     }
//   ]
userBook=BooksData.filter((bgp)=>{
    return bgp.genre==="Fantasy" && bgp.published >"1990"
})
console.log(userBook);
//  [
//     {
//       title: "Harry Potter and the Philosopher's Stone",
//       genre: 'Fantasy',
//       published: '1997',
//       edition: 'Multiple'
//     }
//   ]
