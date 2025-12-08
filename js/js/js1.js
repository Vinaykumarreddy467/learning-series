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
// function greet (name,callback){
//     console.log("Hello "+ name);
//     callback();
// }
// function saybye(){
//     console.log("Goodbye!!")
// }
// greet("Apurva",saybye);

// function sayHi(){
//     console.log("hi");
// }
// greet("vinay",sayHi);


// //functions types in javascript
// //function declaration
// function sum(a, b){
//     return a + b;
// }
// console.log(sum(5, 10));
// //function expression
// function expressionExample(){
//     console.log("This is a  example.");
// }   
// expressionExample();
// //arraw function
// const arrowFunctionExample = (a, b) => {
//     return a * b;
// }
// console.log(arrowFunctionExample(4, 5));
// //immediately invoked function expression (IIFE)
// (function(){
//     console.log("This is an IIFE example.");
// })();
// //Generator Function
// function* generatorExample() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// //closure function
// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log('Outer Variable: ' + outerVariable);
//         console.log('Inner Variable: ' + innerVariable);
//     }
// }

// const newFunction = outerFunction('outside');
// newFunction('inside');
// newFunction('another inside');

// // Arrow function with implicit return
// const implicitReturn = x => x + 10;
// console.log(implicitReturn(5));


// //call, apply and bind methods
// const person = {
//     fullName: function(city, country) {
//         return this.firstName + " " + this.lastName + ", " + city + ", " + country;
//     }
// }
// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }
// const person2 = {
//     firstName: "Jane",
//     lastName: "Smith"
// }
// console.log(person.fullName.call(person1, "New York", "USA"));
// console.log(person.fullName.apply(person2, ["London", "UK"]));
// const boundFunction = person.fullName.bind(person1, "Los Angeles", "USA");
// console.log(boundFunction());
// //function methods types
// const test = function() {
//     console.log('This is a test function.');
// }
// test();
// const add = function(a, b) {
//     return a + b;
// }
// console.log(add(5, 3));


//object syntax
// const person = {
//     firstName: "Vinay",
//     lastName: "molakathala",
//     age: 25
// };
// console.log(person.firstName);
// console.log(person["lastName"]);
// person.age = 26;
// console.log(person.age);
// person.city = "New York";
// console.log(person.city);

// delete person.age;
// console.log(person);

//object literal
// const car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2020,
//     getDetails: function() {
//         return this.make + " " + this.model + " " + this.year;
//     }
// };
// console.log(car.getDetails());

//object constructor
// function Person(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.getFullName = function() {
//         return this.firstName + " " + this.lastName;
//     };
// }
// const person1 = new Person("John", "Doe", 30);
// console.log(person1.getFullName());
// const person2 = new Person("Jane", "Smith", 28);
// console.log(person2.getFullName());

//object.assign
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };
// const returnedTarget = Object.assign(target, source);
// console.log(returnedTarget); // { a: 1, b: 4, c: 5 }

//object.keys
// const obj = { a: 1, b: 2, c: 3 };
// const keys = Object.keys(obj);
// console.log(keys); // ["a", "b", "c"]
//object.values
// const values = Object.values(obj);
// console.log(values); // [1, 2, 3]

//object.create
// const personProto = {
//     name: "vinay"  ,
//     age: 25
// };
// let protoperson = Object.create(personProto);
// console.log(); 



// const person1 = Object.create(personProto);
// person1.firstName = "Vinay";
// person1.greet(); // Hello, Vinay

//inhertance in javascript
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }   
//     speak() {
//         console.log(this.name + ' makes a noise.');
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log(this.name + ' barks.');
//     }
// }

// object properties
// Object Properties in JavaScript

// Object properties are key-value pairs that define the characteristics of an object.
// There are several ways to work with object properties in JavaScript.

// ============================================
// 1. Creating an Object with Properties
// ============================================
const obj = {
    name: "vinay",      // String property
    age: 25             // Number property
};
console.log(obj);

// 2. Object.getOwnPropertyNames()
console.log(Object.getOwnPropertyNames(obj)); // ["name", "age"]

// 3. Object.keys()
console.log(Object.keys(obj)); // ["name", "age"]

// 4. Object.values()
console.log(Object.values(obj)); // ["vinay", 25]

// 5. Object.entries()
console.log(Object.entries(obj)); // [["name", "vinay"], ["age", 25]]

// 6. Object.defineProperty()
Object.defineProperty(obj, 'gender', {
    value: 'male',

});
console.log(obj.gender);

// 7. Modifying a Property Value
obj.age = 26;
console.log(obj.age); // 26

//8. Deleting a Property
delete obj.name;
console.log(obj.name); // undefined — property no longer exists

// 9. Additional Examples with Property Descriptors
Object.defineProperty(obj, 'country', {
    value: 'India'
});
console.log(obj.country); // "India"
// obj.country = "USA";   // This will fail silently in non-strict mode

// 10. Getting Property Descriptors
const descriptor = Object.getOwnPropertyDescriptor(obj, 'gender');
console.log(descriptor);
// Output: { value: 'male', writable: true, enumerable: true, configurable: true }

// 11. Check if Object Has a Property
console.log(obj.hasOwnProperty('age')); // true
console.log(obj.hasOwnProperty('name')); // false (was deleted)


// 12. Property Accessor Methods
console.log(obj.age); // 26

// Bracket notation 
console.log(obj['age']); // 26

// Dynamic property access
const propName = 'age';
console.log(obj[propName]); // 26

//array of objects
const user = [
    { id: 1, name: "vinay", age: 25 },
    { id: 2, name: "apurva", age: 24 },
    { id: 3, name: "shannu", age: 26 },
];

const user2 =[
    { id: 1, name: "vinay", city:"bang" },
    { id: 2, name: "apurva", city:"pune" },
    { id: 3, name: "shannu", city:"chennai" },
]
//merge two array of objects based on id
const mergedUsers = user.map(u => ({
    ...u,
    ...user2.find(u2 => u2.id === u.id)
}));
console.log(mergedUsers);