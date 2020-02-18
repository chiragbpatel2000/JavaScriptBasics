let employee = 
{
employeeId : 101,
employeeName : "Chirag",
employeeJob : "Engineer",
employeebasicSal :50000,

bonus : function(){

    return((employee.employeebasicSal) *10/100);

}

};
//console.log(employee["employeeId"]);
console.log(employee.bonus());