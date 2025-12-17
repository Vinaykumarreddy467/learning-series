//Example of Object Spread Operator
let candidateSelected={
	Name:'Rexha Bebe',
	Qualification:'Graduation',
};
let SelectedAs={
	jobTitle:'System Engineer',
	location:'Bangalore'
};
let employeeInfo={
	...candidateSelected,
	...SelectedAs
};
console.log(employeeInfo); 
/*
{
  Name: 'Rexha Bebe',
  Qualification: 'Graduation',
  jobTitle: 'System Engineer',
  location: 'Bangalore'
} 
*/
//Example of Array Spread Operator
let frontEndFrameworks=['ReactJS','Angular','VueJS'];
let backEndFrameworks=['NodeJS','Django','Flask'];
let fullStackFrameworks=[...frontEndFrameworks,...backEndFrameworks];
console.log(fullStackFrameworks); 
//['ReactJS', 'Angular', 'VueJS', 'NodeJS', 'Django', 'Flask']
//Example of Function Spread Operator
function sum(a,b,c){
    return a+b+c;
}
let numbers=[1,2,3];
console.log(sum(...numbers)); //6
//Example of Rest Parameter
function multiply(...args){
    return args.reduce((acc, val) => acc * val, 1);
}
console.log(multiply(2,3,4)); //24
console.log(multiply(5,6)); //30

//Example of Destructuring Assignment
//Array Destructuring
let rgb=[255,200,100];
let [red,green,blue]=rgb;
console.log(red,green,blue); //255 200 100
//Object Destructuring
let person={    
    firstName:'John',
    lastName:'Doe',
    age:30
};
let {firstName,lastName,age}=person;
console.log(firstName,lastName,age); //John Doe 30
//Nested Destructuring
let student={
    name:'Alice',
    scores:{
        math:90,
        science:85
    }
};
let {name,scores:{math,science}}=student;
console.log(name,math,science); //Alice 90 85
//Default Values in Destructuring
let [x=10,y=20]=[5];
console.log(x,y); //5 20
