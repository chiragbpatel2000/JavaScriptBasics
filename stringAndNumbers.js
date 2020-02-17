// //String Methods
// // two way you can create object for string
// let s = "welcome";

// //let s = new String();

// //charAt()  ---this metho
// s.charAt(2);

// console.log(s.charAt(3));  // c


// //concat() ---

// console.log(s.concat( " to javascript programming"));
// console.log(s.concat(" to javascript").concat(" programming"));

// //replace();
// s = "welcome to javascript";
// console.log(s.replace("javascript", "java"));

// //substring();
// s = "welcome";
// s.substring(0,3);
// console.log(s.substring(0,7));

// //toLowerCase() & toUpperCase()
// s = "WELCOME";
// console.log(s.toLowerCase());
// console.log(s.toUpperCase());

// //split()
// s = "welcome to javascript";
// let arr =s.split(" ");
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// //trim()
// s = "   welcome  ";
// console.log(s);
// console.log(s.trim());

// Numbers is object in js
//let x = 100;
//let x = new Number(100);

let x = 102;    // integer value
let y = 102.7;  // decimal
let z = 10e2;   // exponencial value

console.log(x,y,z);

//isInteger()
x =10;
y =1.8;
z = "X";
console.log(Number.isInteger(x));  // true
console.log(Number.isInteger(y));
console.log(Number.isInteger(z));

//parseInt()  -converts string into number
s = "12345";
console.log(typeof(s));
console.log(typeof(Number.parseInt(s)));
// parseFloat()  --
s = "123.567" ;
console.log(typeof(s));
console.log(typeof(Number.parseFloat(s)));

//toString()  -- number into string
let n =1234;
console.log(typeof(n));
console.log(typeof(Number.toString(n)));

 
 
 




