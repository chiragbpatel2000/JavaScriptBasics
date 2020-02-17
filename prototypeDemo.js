

class Employee 
{
 constructor(eid,ename)
 {
  this.eid = eid;
  this.ename =ename;
 }
}
Employee.prototype.sal = 50000;

Employee.prototype.display = function()
{
    console.log(this.eid,this.ename,this.sal);

}

employee = new Employee(101,"david");
employee.display();
//console.log(employee.eid,employee.ename,employee.sal);

emp2obj = new Employee(102, "John");
//console.log(emp2obj.eid,emp2obj.ename,emp2obj.sal);
emp2obj.display();
