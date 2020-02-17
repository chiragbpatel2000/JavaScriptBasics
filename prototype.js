// prototype is an object that is associated with every function & object by default.
// if we want to add new properties at later stage to a function/class, we can take the help of prototype

function student()
{
  this.name = "John";
  this.gender ="male";
}

student.prototype.age =35;
stu1 = new student();
// console.log(stu1.name);
// console.log(stu1.gender);
//stu1.age =35;
console.log(stu1.name,stu1.gender,stu1.age);

stu2 = new student();
console.log(stu2.name,stu2.gender,stu2.age);

