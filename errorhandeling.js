// // structure of error handling
function dosomething() {
	throw new Error(
		'a error is thrown from dosomething');
}

function init() {
	try {
		dosomething();
	}
	catch (e) {
		console.log(e);
	}
	console.log(
		"After successful error handling");
}

init();
//it writes the data in the file you gave to 

const fs=require(`fs`)
// let data="hi this is maheedhar I am here to teach JavaScript"
fs.writeFileSync('app.txt',data)


//read the data from file and gives on terminal
let read1=fs.readFileSync('app.txt')
console.log(read1);
//<Buffer 68 69 20 74 68 69 73 20 69 73 20 6d 61 68 65 65 64 68 61 72 20 49 20 61 6d 20 68 65 72 65 20 74 6f 20 74 65 61 63 68 20 4a 61 76 61 53 63 72 69 70 74>
//sice node js use data type called Buffer while reading



let read2=fs.readFileSync('app.txt').toString()
console.log(read2);
//where we have to use the method called tostring to read actual data inthe file


//append data in to a file
let data1="\n welcome to my class"
fs.appendFileSync("app.txt",data1)

//rename the file
fs.renameSync('text.txt','app.txt')

//error projection on file handeling
let data2='we today going to learn about dile and error handeling'
fs.appendFile("app.txt",data2,(err)=>{
    if (err) throw err;
    console.log("success of appending data in to file")
})

//error handling of node.js using utf-8 for converting to string of buffer od net

// let input;
fs.readFile('app.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log('success')
    console.log(data);
    // input=data;
})

//osModule

const os = require(`os`);
console.log(os.platform());//Win32
console.log(os.type());//Windows_NT
console.log(os.version());
console.log(os.totalmem());//It gives the total memory in your system
console.log(os.freemem());//it gives the free space in your system
console.log(os.cpus())//It will show how many cpu are there in your system
console.log(os.arch());//It will give you the architecture of your machine like x

//http module
const http =require('http');
const server = http.createServer((req,res)=> {
    res.write('Hello World!');
    res.end();
});
server.listen(5000);
console.log('the server is running at port 5000');
    