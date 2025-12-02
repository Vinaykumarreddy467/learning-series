//function methods types
const test = function() {
    console.log('This is a test function.');
}
test();
const add = function(a, b) {
    return a + b;
}
console.log(add(5, 3)); 

const square = x => x * x;
console.log(square(4)); 

const multiply = (a, b) => a * b;
console.log(multiply(4, 6)); 

const greet = name => `Hello, ${name}!`;
console.log(greet('Alice')); 

///give me all the array methods examples
// Array methods examples
const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach(num => console.log(num));
// map
const squares = numbers.map(num => num * num);
console.log(squares);
// filter
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);
// reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
// find
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);
// some
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);
// every
const allPositive = numbers.every(num => num > 0);
console.log(allPositive);
// sort
const sortedDesc = [...numbers].sort((a, b) => b - a);
console.log(sortedDesc);
// slice
const firstThree = numbers.slice(0, 3);
console.log(firstThree);
// splice
const numsCopy = [...numbers];
numsCopy.splice(2, 1, 99); 
console.log(numsCopy);
// concat
const moreNumbers = [6, 7, 8];
const combined = numbers.concat(moreNumbers);
console.log(combined);
// join
const joined = numbers.join('-');
console.log(joined);
// indexOf
const index = numbers.indexOf(3);
console.log(index);
// includes
const includesFour = numbers.includes(4);
console.log(includesFour);
// findIndex
const indexOfFirstEven = numbers.findIndex(num => num % 2 === 0);
console.log(indexOfFirstEven);
// reverse
const reversed = [...numbers].reverse();
console.log(reversed);
// flat
const nested = [1, [2, [3, 4]]];
const flattened = nested.flat(2);
console.log(flattened);
// fill
const filled = new Array(5).fill(0);
console.log(filled);
// copyWithin
const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3);
console.log(arr);
// toString
const str = numbers.toString();
console.log(str);
// valueOf
const value = numbers.valueOf();
console.log(value);
// entries
const entries = numbers.entries();
for (const [index, value] of entries) {
    console.log(index, value);
}


//what is callback function with example
//A callback function is a function that is passed as an argument to another function 
// and is executed after some operation has been completed. 
// Callbacks are commonly used for asynchronous operations, such as fetching data from an API or handling events.
//callbacks functions example
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: 'John', age: 30 };
        callback(data);
    }, 1000);
}

fetchData(function(data) {
    console.log('Data received:', data);
});



