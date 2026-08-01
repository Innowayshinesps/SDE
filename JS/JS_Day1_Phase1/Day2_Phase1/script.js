// Type Coercion 

// - Implicit
// - Explicit  (var x = Number(a);)

// Direct conversion :- Var a = Number(prompt('Enter a Number'));

// Binary Operators:

// - Arithmetic Operator
// - Assignment Operator (a += 10)
// - Comparsion Operator (== is loosely coupled (i.e.) it ignores type of the element whereas === is not)
// - Increment & Decrement Operator (pre-increment increase value and then print & post-increment print and then increase value)
// - Logical Operator  (works on 2 conditions at a time (a>b || b>c))
// OR|| works on additon ie 0  -  0  =  0; 0  -  1  =  1; 1  -  0  =  1; 1  -  1  =  1;
//AND&& works on multiplication ie 0  -  0  =  0; 0  -  1  =  0; 1  -  0  =  0; 1  -  1  =  1;

//Conditionals:
// if(condition)
// {
//     //true
// }
// else{
//     //false
// }

// if(condition)
// {
//     //true
// }
// else if(condition)
// {
//     //true
// }
// else{
//     //false
// }

// truthy      &  Falsy values
// everything     false
// including      0
// "0" "false"    " "
// [] {}          null
//                undefined
//                NaN

//ternary operator

// console.log((age>6) ?'yes':'No')

//Switch

// To avoid long if-else chains

// var marks = 80

// switch(true)
// {
//     case (marks>50):
//         console.log("super");
//         break;

//     case marks>60:
//         console.log("not super");
//         break;

//     default:
//         console.log("bhag re");
//         break;

// }

// Loops:

// var a = 0

// while(a<5)
// {
//     console.log('hello');
//     a++
// }
// -----------------------------------------------------------
// var a = 0

// do
// {
//     console.log('hello');
//     a++
// }while(a<5)

// do{
//     var pass = prompt('Enter a password')
// }while(pass != 123)

//for(var a = 0; a < 10; a++)
// {
//     console.log('hello')
// }