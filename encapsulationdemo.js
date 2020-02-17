
//Encapsulation is defined as the wrapping up of data under a single unit, it is the mechanism that binds together code and the data. The javascript encapsulation is a process of binding the data(i.e variable) with the functions acting on that data

class Student 
{


    constructor()
    {

        let name,marks;


    }

    getName()
    {
       return this.name;
    }
    setName(name)
    {
       this.name = name;
    }

    getMarks(){
        return this.marks
    }
    setMarks(marks){
        this.marks = marks;
    }
}

let stu = new Student();
stu.setName("John");
stu.setMarks(90);

console.log(stu.getName(), stu.getMarks());
