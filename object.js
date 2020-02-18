//JS objects, properties and methods
let person = 
{
  firstName:"Chirag",
  lastName:"Patel",
  age:30,
  weight:57

}
//Accesssing object properties syntax
// console.log(person["firstName"]); //chirag
// console.log(person.firstName); //chirag
// console.log(person.age);  //30

//add new properties to existing object syntax as below
person["height"] = 5.7;
person.height = 5.7;
console.log(person.height); //5.7
console.log(person["height"]);//5.7

//update existing properties in object
person.weight = 60;
console.log(person.weight);  //60 
console.log(person["weight"]);//60

//remove the properties from the object
//delete person.height;   or 
delete person["height"];
console.log(person.height);

//looping object

//for/in looping statement 
// for (const x in person) {
//     if (person.hasOwnProperty(x)) {
//         const element = person[x];
//         console.log(element);
        
//     }
// }
for(let x in person){
    //console.log(x);  // print only properties names
    //console.log(person[x]);  // print only values of the properties
    console.log(x +"     "  +person[x]);
}
