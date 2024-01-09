//Arrays in js{object}
const arr=[0,1,2,"hi","mahee",true]
// In js we can have different datatypes in an array
// It is resizeabul and also can be array of arrays

//array elements cannot be accessed using arbitrary strings as indexes
/*  * shallow copies and deep copies 
    shallow copies :=
        copies which shair same reference point
    deepcopies :=
        copies which don't shair same reference point
*/
// since indexing starts from 0
console.log(arr[3]);//hi
console.log(arr.push(9));
console.log(arr);//[ 0, 1, 2, 'hi', 'mahee', true, 9 ]
console.log(arr.pop());
console.log(arr);//[ 0, 1, 2, 'hi', 'mahee', true ]
//accessing out of bound index will give undefined
console.log(arr[6])//undefine
/*unshift is not that useful since it chandes all index valus of all elements 
and add element at starting of array so it increases the no.of iterations*/
arr.unshift("start")
console.log(arr);//[ 'start', 0, 1, 2, 'hi', 'mahee', true ]
arr.shift()
console.log(arr);//[ 0, 1, 2, 'hi', 'mahee', true ]
console.log(arr.includes(4));//false
console.log(arr.indexOf("mahee"));//4
console.log(arr.indexOf(44));//-1
const newarr=arr.join()
console.log(arr);//[ 0, 1, 2, 'hi', 'mahee', true ]
console.log(newarr);//0,1,2,hi,mahee,true
console.log(typeof newarr);//string
//===slice,splice====
const arr1=arr.slice(1,3)
console.log(arr1);//[ 1, 2 ]
const arr2=arr.splice(1,3)
console.log(arr);//[ 0, 'mahee', true ]
console.log(arr2);//[ 1, 2 ,'hi' ]
//note**
//slice does not manuplate original array and it jest include lower boundary not outer[1,3);
//splice manuplates the original array it remove the range from arr including upper bound[1,3]
movie=["RRR","pushpa","Hunuman","Davara","Salara"]
hero=["NTR","Ramcharan","AlluArjun","Prabas","Nani"]
director=["rgv",["Puri Jagannadh","Krishna Vamsi",],"Ragamouli","Trivikram Srinivas","Sekhar Kammula","Koratala Siva"]
//console.log(movie.push(hero))//push add second array as an element in first array
/*[
    'RRR',
    'pushpa',
    'Hunuman',
    'Davara',
    'Salara',
    [ 'NTR', 'Ramcharan', 'AlluArjun', 'Prabas', 'Nani' ],]*/
//console.log(movie.concat(hero))//concatenates two arrays
// since concat will form a new array .so, its space complexcity is high
/*[
    'RRR',       'pushpa',
    'Hunuman',   'Davara',
    'Salara',    'NTR',
    'Ramcharan', 'AlluArjun',
    'Prabas',    'Nani'
  ]*/
const all=[...movie,...hero]
console.log(all);//we can combine more than two array by this...
/*[
  'RRR',                'pushpa',
  'Hunuman',            'Davara',
  'Salara',             'NTR',
  'Ramcharan',          'AlluArjun',
  'Prabas',             'Nani',
  'rgv',                'Ragamouli',
  'Trivikram Srinivas', 'Sekhar Kammula',
  'Koratala Siva',      'Puri Jagannadh'
]*/
const All=[...movie,...hero,...director]
console.log(All);
//here we are combining movie array with hero array and director array using ... operator
/*[
    'RRR',
    'pushpa',
    'Hunuman',
    'Davara',
    'Salara',
    'NTR',
    'Ramcharan',
    'AlluArjun',
    'Prabas',
    'Nani',
    'rgv',
    [ 'Puri Jagannadh', 'Krishna Vamsi' ],
    'Ragamouli',
    'Trivikram Srinivas',
    'Sekhar Kammula',
    'Koratala Siva'
  ]*/
const real_all=director.flat(Infinity);
console.log(real_all);
//inthis we will make array of arrays to one array
/*[
  'rgv',
  'Puri Jagannadh',
  'Krishna Vamsi',
  'Ragamouli',
  'Trivikram Srinivas',
  'Sekhar Kammula',
  'Koratala Siva'
]*/
console.log(Array.isArray("Maheedhar"));//false
console.log(Array.from("Maheedhar"));//['M', 'a', 'h','e', 'e', 'd','h', 'a', 'r']
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]
//Array.of "Returns a new array from a set of elements."
