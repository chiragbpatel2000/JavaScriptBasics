

//Method overriding is possible only in inheritence //whatever implementation done in parent class, we can override that implementation in child class called as overriding

class Bank 
{

    roi()
    {
      return 0;
    }
}

class AXIS extends Bank
{
  roi()
  {
   return 10.5;
  }
}

class SBI extends Bank 
{
 roi()
 {
     return 12.5;
 }
}

sbi = new SBI();
console.log(sbi.roi());

axis = new AXIS();
console.log(axis.roi());