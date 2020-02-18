
let fruits = ["Banana", "mango", "Apple", "Orange"];

//toString()  method which converts array to string comma separate
// fruits.toString();
// console.log(fruits.toString());
// //join() method 
// fruits.join();
// console.log(fruits.join("*"));
//pop() remove the last element from array

console.log(fruits.pop());
console.log(fruits);
//push() method add the new element to array to end

fruits = ["Banana", "mango", "Apple", "Orange"];

console.log(fruits.push("Kiwi"));
console.log(fruits); 
//shift()method removed the first array element 

fruits = ["Banana", "mango", "Apple", "Orange"];
console.log(fruits.shift());  //banana
console.log(fruits);
//unshift() method add new element to array in the beginning of the array and return length of array

fruits = ["mango", "Apple", "Orange"];
console.log(fruits.unshift("lemon"));
console.log(fruits);

//Deleting element from array
fruits = ["Banana", "mango", "Apple", "Orange"];
delete fruits[1];
console.log(fruits);
//concat() - joining /merging 2 or more arrays

let arr1 = [10,20];
let arr2 = ["A","B","C"];
console.log(arr1.concat(arr2));

let arr3 = ["X","Y","Z"];
console.log(arr1.concat(arr2,arr3));
//slice()method 

fruits = ["Banana", "mango", "Apple", "Orange"];
console.log(fruits.slice(1));  // [ 'mango', 'Apple', 'Orange' ]
console.log(fruits.slice(2))
//sort() method 
fruits = ["Banana", "mango", "Apple", "Orange"];
console.log(fruits.sort());
let nums = [100,500,200,300];
console.log(nums.sort());

//reverse() 
fruits = ["Banana", "mango", "Apple", "Orange"];
console.log(fruits)  //original array
console.log(fruits.reverse());// after revering



