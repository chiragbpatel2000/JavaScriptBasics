

class Test

{

  static  a = 10; // static variable
  b = 20;   // non static variable


  static m1()
  {
   console.log("This is static mehtod ");
  }

  m2()
  {
   console.log("This is non static mehtod ");
  }


}
// we can directly access static variable and methods using classname
console.log(Test.a);  // 10
//console.log(Test.b);  // undefined

Test.m1();
//Test.m2();  // error incorrect way of accessing method

// we can access non static variable and method using object

let obj = new Test();
console.log(obj.b);
obj.m2();