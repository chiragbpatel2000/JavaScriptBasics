
//here studentID, studentName and grade are local variable which is inside the method
// after using this keyword in side the method , i can used studenId, studentName and grade in side the class as global variable

class Student {


    constructor(Id,sName,sGrade){
         
        this.studentId =Id;
        this.studentName =sName;
        this.grade =sGrade

    }

    display()
    {
       
        console.log(this.studentId, this.studentName,this.grade);
    }

}

    let stu = new Student(101,"Chirag", "A"); 

     // at the time of object creation , automatically constructor will be invoked

    stu.display();

   


    // setDetails(Id,sName,sGrade)
    // {
    
    //     this.studentId = Id;
    //     this.studentName = sName;
    //     this.grade = sGrade 
        
    // }

//     display()
//     {
       
//         console.log(this.studentId, this.studentName,this.grade);
//     }

    
// }

// In Javascript to create an object we have to first creat variable 

// let stu = new Student();
// stu.setDetails(101,"Chirag", "A");
// stu.display();