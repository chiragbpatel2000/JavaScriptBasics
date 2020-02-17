// polymorphism is the ability to create a variable, function, or an object that has more than one form
class Shape
{
  draw()
  {
      return " i am generic shape";
  }
}

class Square extends Shape 
{
draw(){
    return " I am square";
}
}

class Circle extends Shape 
{
draw(){
    return " I am circle";
}
}

let s1 = new Shape();
console.log(s1.draw());

let s2 = new Square();
console.log(s2.draw());

let s3 = new Circle();
console.log(s3.draw());