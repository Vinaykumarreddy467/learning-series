// Array declaration types
const arrConstructor = new Array(1, 2, 3); // Using Array constructor
const arrLiteral = [4, 5, 6]; // Using array literal
const arrOf = Array.of(7, 8, 9); // Using Array.of method
const arrFrom = Array.from('hello'); // Using Array.from method
console.log("Array Declarations:");
console.log(arrConstructor);
console.log(arrLiteral);
console.log(arrOf);
console.log(arrFrom);


// Array methods
const baseArr = [1, 2, 3, 4, 5];

// 1. push() - Adds one or more elements to the end of an array
baseArr.push(6);
console.log("After push:", baseArr); // [1, 2, 3, 4, 5, 6]

// 2. pop() - Removes the last element from an array
baseArr.pop();
console.log("After pop:", baseArr); // [1, 2, 3, 4, 5]  

// 3. shift() - Removes the first element from an array
baseArr.shift();
console.log("After shift:", baseArr); // [2, 3, 4, 5]

// 4. unshift() - Adds one or more elements to the beginning of an array
baseArr.unshift(1);
console.log("After unshift:", baseArr); // [1, 2, 3, 4, 5]

// 5. splice() - Adds/Removes elements from an array
baseArr.splice(2, 1, 10);
console.log("After splice:", baseArr); // [1, 2, 10, 4, 5]

// 6. slice() - Returns a shallow copy of a portion of an array
const slicedArr = baseArr.slice(1, 4);
console.log("After slice:", slicedArr); // [2, 10, 4]

// 7. indexOf() - Returns the first index of a specified element
const indexOfTen = baseArr.indexOf(10);
console.log("Index of 10:", indexOfTen); // 2

// 8. includes() - Checks if an array contains a specified element
const includesFour = baseArr.includes(4);
console.log("Includes 4:", includesFour); // true

// 9. forEach() - Executes a provided function once for each array element
baseArr.forEach(num => console.log("forEach:", num));

// 10. map() - Creates a new array with the results of calling a provided function on every element
const mappedArr = baseArr.map(num => num * 2);
console.log("After map:", mappedArr);

// 11. filter() - Creates a new array with all elements that pass the test implemented by the provided function
const filteredArr = baseArr.filter(num => num > 2);
console.log("After filter:", filteredArr); // [10, 4, 5]

// 12. reduce() - Executes a reducer function on each element of the array, resulting in a single output value
const sumArr = baseArr.reduce((acc, curr) => acc + curr, 0);
console.log("After reduce (sum):", sumArr); // 22

// 13. find() - Returns the value of the first element that satisfies the provided testing function
const foundNum = baseArr.find(num => num > 3);
console.log("After find:", foundNum);

// 14. sort() - Sorts the elements of an array in place and returns the sorted array
baseArr.sort((a, b) => b - a);
console.log("After sort:", baseArr); // [10, 5, 4, 2, 1]

// 15. reverse() - Reverses the order of the elements in an array
baseArr.reverse();
console.log("After reverse:", baseArr); // [1, 2, 4, 5, 10]

// 16. join() - Joins all elements of an array into a string
const joinedArr = baseArr.join(", ");
console.log("After join:", joinedArr); // "1, 2, 4, 5, 10"

// 17. concat() - Merges two or more arrays
const arrConcat = [11, 12, 13];
const concatenatedArr = baseArr.concat(arrConcat);
console.log("After concat:", concatenatedArr); // [1, 2, 4, 5, 10, 11, 12, 13]

// 18. length - Returns the number of elements in an array
console.log("Array length:", baseArr.length); // 5

// 19. isArray() - Checks if a value is an array
console.log("Is baseArr an array?", Array.isArray(baseArr)); // true

// 20. flat() - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
const nestedArr = [1, [2, [3, 4]], 5];
const flatArr = nestedArr.flat(2);
console.log("After flat:", flatArr); // [1, 2, 3, 4, 5] 


let arr4=[1,2,3,4,5,6,6,7,7,2,83,4,5,5,6,86];
// Remove duplicates and sort
let uniqueSortedArr = Array.from(new Set(arr4)).sort((a, b) => a - b);
console.log("Unique Sorted Array:", uniqueSortedArr);