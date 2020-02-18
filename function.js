//javascript function is a block of statement which will perform a specific task
//javascript function is executed when something invokes it( call it)
//the code inside the function will execute when call the function : when an event occurs (when user click a button), when it is invoked from javascript code,automatically(self invoked)

//example 1
// function add(a,b){
//     console.log(a+b);
// }
// add(100,200);
// //example 2
// function add(a,b){
//     return(a+b);
// }
// let result = add(10,20);
// console.log(result);

//example 3
// function greeting(){
//     console.log("Good morning");

// }
// greeting();
//example 4

     function greeting(){
        return("This is Good morning");
    
     }
     let message = greeting();
     console.log(message);
