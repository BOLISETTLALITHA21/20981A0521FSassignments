//TASK-1:variables and datatypes
var a:number=21;
var b:string="LALITHA";
var c:boolean=true;
var array:number[]=[1,2,3];
var tuple:[color:string,price:number]=["pink",300];
enum days{sunday=1,monday,tuesday,wednesday,friday,saturday};
var d:days=days.tuesday;
console.log("number,string,boolean,array,tuple,enum:",a,b,c,array,tuple,d);
//TASK-2:functions 
function add(num1:number,num2:number)
{
    return num1+num2;
}
var sum:number=add(2,3);
console.log("sum of 2 and 3 is : "+sum);
function captializ(str:string)
{
    return str.toUpperCase();
}
var lowerstring:string="full stack";
console.log("capitalized version  of a string full stack is:"+captializ(lowerstring));
//TASK-3:interfaces
interface Person
{   
    name:string;
    age:number;
    email:string
}
var user:Person={name:"lalli",age:21,email:"lalithabolisettti@gmail.com"};
console.log("interface:name,age,email are:"+user.name,user.age,user.email);
//TASK-4:classes
class Car
{
     make:string
    model:string
    year:number;
     constructor(make:string,model:string,year:number)
    {
        this.make=make;
        this.model=model;
        this.year=year;
    }
    displayInfo():void
    {
      console.log("car make",this.make,"car model",this.model,"car year",this.year);
    }
};
var obj=new Car("suzuki","AP1234",21);
obj.displayInfo();
//TASK-5:generic 
function reversearray<T>(arr:T[]):T[]
{
var rev:T[]=[];
for(let i=arr.length-1;i>=0;i--)
{
    rev.push(arr[i]);
}
return rev;
}
var l:any=[1,"lalli",3];
console.log("reverse of an array [1,'lalli',3] is:",reversearray(l));

