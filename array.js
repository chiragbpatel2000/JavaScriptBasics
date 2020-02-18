// javascript arrays are used to store multiple values in a single variable
// array is a special variable, which can hold more than one value at time

let cars = ["saab", "volvo","vw"];  
//let cars = new Array("saab","volvo","vw")
console.log(cars);

console.log(cars[2]);//accessing elements

cars[0] = "Opel";
console.log(cars[0]);
//we can have variable of different types in the same array

let myArray = [100,"welcome",10.5,true];
console.log(myArray);
//we can have objects in an array
//person1 is object & person2 is object
let person1 = {

    name:"chirag",
    age :30
}
let person2 = {

    name:"patel",
    age: 40
}
let myArray1 = [person1,person2];
console.log(myArray1);
console.log(myArray1[0]);

let fruits = ["Banana", "Apple", "Orange", "Mango"];
console.log(fruits.length);
//Looping elements from array

// for (let index = 0; index < fruits.length; index++) {
//     const element = fruits[index];
//     console.log(element);
    
// }
//looping elements from array using forof loop
for (const elem of fruits) {
    console.log(elem);
}
//Recognize an Array - type of
console.log(typeof fruits); // object

console.log(Array.isArray(fruits));





