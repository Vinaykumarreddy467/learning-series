// var num = 10;
// let num = 20;
// const num2 = 30;

// {
//     console.log(num);
// }

// console.log("num2", num);

// function newData(){
//     let num1 = 20;
//     return console.log(num1);
// }

// newData();

// console.log(num);

// var num = 20;
// var num = 30;
// console.log(num);

// let num1 = 20;
// let num1 = 30;

// const num = 20;
// const num = 30;

// console.log(num);


// If else statements

// var num = 8;
// if(num == 5){
//     console.log("5 number is matched");
// }else if(num == 8){
//     console.log("8 number is matched");
// }else if(num == 10){
//     console.log("10 number is matched");
// }else{
//     console.log("not matched");
// }

// let sum = 20;
// switch (sum) {
//     case 10:
//         console.log("its matched 10");
//         return;
//     case 20:
//         console.log("its matched 20");
//         return;
//     case 30:
//         console.log("its matched 30");
//         return;
//     case 40:
//         console.log("its matched 40");
//         return;
//     default:
//         console.log("not matched");
// }

// console.log(num);
// var num = 20;

// function hoisting

// Ternary operator

// let num = 10;
// let newdata = (num == 10) ?(
//    <div> Hello world</div>
//  ) :(
//    <div> New world</div>
//  );

//  if(num == 10){
//     console.log("hello ")
//  }else{
//     console.log("hello 2")
//  }


// Loops
// forloop
// while loop
// do while loop
// for of loop
// for in loop

// Forloop

// for(i=0; i<=100; i++){
//     console.log("hello", i);
// }

// const data = [1,23,4,5,56,6,7,8];

// for(i=0; i<data.length; i++){
//     console.log(data[i]);
// } 

// Nested forloop
 
// for(let i=1; i<4; i++){
//     console.log("I value", i);
//     for(let j=1; j<4; j++){
//         console.log(`Hi ${i} = Hello ${j}`);
//         // console.log(`${i} x ${j} =${i*j}`)
//     }
// }

// While Loop

// let data = 4; Intilization
// while(condition){
    // console.log("Hello world");
    // block code 
    // i++ (Increment)
// }

// let i = 5;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// Do while loop

// let i = 1; // intialization
// do{
//     console.log("i = ", i); // code excution
//     i++; // increment
// }while(i<=5) // condition

// const data = ["vinay", "apurva", "shannu", "naidu", "siva"];
// for(i=0; i<data.length; i++){
//     console.log(data[i]);
// }

// for(let i of data){
//     console.log(i);
// }

// const data = { 
//     1 :"vinay",
//     2 :"apurva",
//     3 :"shannu",
// }

// for(let i in data){
//     console.log(data[i]);
// }

//pyramid patterns  

// let n = 5;
// for(let i=1; i<=n; i++){
//     let str = "";
//     for(let j=1; j<=i; j++){
//         str += "* ";
//     }
//     console.log(str);
// }



// for(let i=n; i>=1; i--){
//     let str = "";   
//     for(let j=1; j<=i; j++){
//         str += "* ";
//     }
//     console.log(str);
// }


// for(let i=1; i<=n; i++){
//     let str = " ".repeat(n-i);
//     for(let j=1; j<=i; j++){
//         str += "* ";
//     }
//     console.log(str);
// }

// for(let i=n; i>=1; i--){
//     let str = " ".repeat(n-i);
//     for(let j=1; j<=i; j++){
//         str += "* ";
//     }
//     console.log(str);
// }


//type of loops in javascript
// for loop
// while loop
// do while loop
// for of loop
// for in loop


// let arr=[,,,];
// console.log(arr.length);

// const a= {
//     a:1,
// }
// let b = a;
// b.a = 2;
// console.log(a.a);
// console.log(b.a);


// let a="A"-1;
// console.log(a);
// console.log(typeof a);
// let b="vinay"+"2";
// console.log(b);
// console.log(typeof b);



// console.log("2"+2+"2");
// console.log("2"+2-"2");


// const a = {};
// const b = {
//     name:"vinay"
// };
// console.log(a==b);



//callback function
function greet (name,callback){
    console.log("Hello "+ name);
    callback();
}
function saybye(){
    console.log("Goodbye!!")
}
greet("Apurva",saybye);

function sayHi(){
    console.log("hi");
}
greet("vinay",sayHi);


//functions types in javascript
//function declaration
function sum(a, b){
    return a + b;
}
console.log(sum(5, 10));
//function expression
function expressionExample(){
    console.log("This is a  example.");
}   
expressionExample();
//arraw function
const arrowFunctionExample = (a, b) => {
    return a * b;
}
console.log(arrowFunctionExample(4, 5));
//immediately invoked function expression (IIFE)
(function(){
    console.log("This is an IIFE example.");
})();
//Generator Function
function* generatorExample() {
    yield 1;
    yield 2;
    yield 3;
}

//closure function
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');
newFunction('another inside');

// Arrow function with implicit return
const implicitReturn = x => x + 10;
console.log(implicitReturn(5));


//call, apply and bind methods
const person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe"
}
const person2 = {
    firstName: "Jane",
    lastName: "Smith"
}
console.log(person.fullName.call(person1, "New York", "USA"));
console.log(person.fullName.apply(person2, ["London", "UK"]));
const boundFunction = person.fullName.bind(person1, "Los Angeles", "USA");
console.log(boundFunction());
//function methods types
const test = function() {
    console.log('This is a test function.');
}
test();
const add = function(a, b) {
    return a + b;
}
console.log(add(5, 3));