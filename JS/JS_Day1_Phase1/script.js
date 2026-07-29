// Story Time:

// Brenden Eich founded it in 1995 May and developed it in 10 days. 

// v8 engine reverse engineered to get Node-jsx.Brenden

// microsoft copied javascript and built jScript for internet explorer

// Mosaic was the first browser founded to run Tim Berner Lee's creations and then the founder of mosaic "anderson" founded Netscape.

// javascript was founded by Netscape for netscape navigator. 



// To print something in console
console.log('To print in console');

console.warn('To print warning in console');

console.error('To print error in console');

console.table(['To', 'Print', 'Table', 'in', 'console']);

// [ User Browser (Client side) ]  <--- HTTP Request / Response --->  [ Web Server (Server side rendering has better SEO) ]
//   (Renders UI, User Input)                                      (Database, Logic, Auth)

//Var(variable) is a container that can be used to store data

var a //declaration
a = 10 //initialization
console.log('Value of a is:',a);
// also written as var a = 10


//arithmetic operations

var x = 10
var y = 20

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)

//javascript is an dynamic interpreter language. Also, variables name should be in camelcase.

// Datatypes in javascript
// primitive and non-primitive(reference)
// 1. Number            1. Array
// 2. String            2. Objects
// 3. Boolean           3. Functions
// 4. Undefined
// 5. symbol(Unique variables)
// 6. Null
// 7. BigInt(2^53-1)


//Alert - used to provide alert in browser notification code: "alert('this is message');"

//Confirm - it asks a question and gives 2 options (OK or Cancel). 

//prompt - Allows user to answer in the notification.

var user = prompt('Enter ur name')

console.log(user)

//But here when u enter anything in prompt, it prints in console in string. So when u use +, it concatinates the number.

var naam = prompt("enter name")

var kaam = prompt('enter kaam')

console.log(naam+kaam)

//But other arithmetic works fine(confusing haan)