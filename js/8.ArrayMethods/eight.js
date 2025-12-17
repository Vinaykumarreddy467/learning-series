//array methods
let fruits = ['apple', 'banana', 'cherry'];

//1. push() - adds an element to the end of the array
fruits.push('date');
console.log(fruits); // ['apple', 'banana', 'cherry', 'date']
//2. pop() - removes the last element from the array
let lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits); // ['apple', 'banana', 'cherry']
//3. shift() - removes the first element from the array
let firstFruit = fruits.shift();    
console.log(firstFruit);
console.log(fruits); // ['banana', 'cherry']
//4. unshift() - adds an element to the beginning of the array
fruits.unshift('avocado');  
console.log(fruits); // ['avocado', 'banana', 'cherry']
//5. splice() - adds/removes elements from the array
fruits.splice(1, 0, 'blueberry'); // adds 'blueberry' at index 1    
console.log(fruits); // ['avocado', 'blueberry', 'banana', 'cherry']
fruits.splice(2, 1); // removes 1 element at index 2    
console.log(fruits); // ['avocado', 'blueberry', 'cherry']
//6. slice() - returns a shallow copy of a portion of the array
let citrus = fruits.slice(1, 3); // from index 1 to 3 (not inclusive)
console.log(citrus); // ['blueberry', 'cherry']
//7. indexOf() - returns the first index of a specified element
let index = fruits.indexOf('cherry');
console.log(index); // 2
//8. forEach() - executes a provided function once for each array element
fruits.forEach(function(fruit, idx) {   
    console.log(idx + ': ' + fruit);
});
// Output:
// 0: avocado
// 1: blueberry
// 2: cherry
//9. map() - creates a new array with the results of calling a provided function on every element
let upperFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log(upperFruits);
// ['AVOCADO', 'BLUEBERRY', 'CHERRY']
//10. filter() - creates a new array with all elements that pass the test implemented by the provided function
let bFruits = fruits.filter(function(fruit) {
    return fruit.startsWith('b');
});
console.log(bFruits); // ['blueberry']
//11. reduce() - executes a reducer function on each element of the array, resulting in a single output value
let fruitString = fruits.reduce(function(accumulator, fruit) {
    return accumulator + ', ' + fruit;
});
console.log(fruitString); // 'avocado, blueberry, cherry'   
//12. find() - returns the value of the first element that satisfies the provided testing function
let foundFruit = fruits.find(function(fruit) {
    return fruit.length > 6;
});
console.log(foundFruit); // 'blueberry'
//13. some() - tests whether at least one element in the array passes the test implemented by the provided function
let hasLongFruit = fruits.some(function(fruit) {
    return fruit.length > 6;
});
console.log(hasLongFruit); // true
//14. every() - tests whether all elements in the array pass the test implemented by the provided function
let allShortFruits = fruits.every(function(fruit) {
    return fruit.length < 10;
});
console.log(allShortFruits); // true
//15. sort() - sorts the elements of the array in place and returns the sorted array
fruits.sort();
console.log(fruits); // ['avocado', 'blueberry', 'cherry']
//16. reverse() - reverses the order of the elements in the array
fruits.reverse();
console.log(fruits); // ['cherry', 'blueberry', 'avocado']  
//17. join() - joins all elements of the array into a string
let fruitList = fruits.join(' - ');
console.log(fruitList); // 'cherry - blueberry - avocado'
//18. concat() - merges two or more arrays
let moreFruits = ['date', 'elderberry'];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ['cherry', 'blueberry', 'avocado', 'date', 'elderberry']
//19. flat() - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
let nestedFruits = ['apple', ['banana', 'cherry'], ['date', ['elderberry']]];
let flatFruits = nestedFruits.flat(2);
console.log(flatFruits); // ['apple', 'banana', 'cherry', 'date', 'elderberry']
//20. fill() - fills all the elements of an array from a start index to an end index with a static value
let fillArray = new Array(5);
fillArray.fill('kiwi', 1, 4);   
console.log(fillArray); // [ <1 empty item>, 'kiwi', 'kiwi', 'kiwi', <1 empty item> ]   
//These are some of the most commonly used array methods in JavaScript. 
//They help in manipulating and accessing array data efficiently.

let numbers = [1, 2, 7, 3, 4, 5];
let max = numbers.reduce(function(a, b) {
    if (a > b) return a;
    else return b;  
});
console.log(max); // 5


//spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

//spread with objects 
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let mergedObj = {...obj1, ...obj2};
console.log(mergedObj); // {a: 1, b: 2, c: 3, d: 4}

//rest parameter : it collects all remaining elements into a single array
function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0 );
}
console.log(sum(1, 2, 3, 4)); // 10

//destructuring assignment
let [x, y, ...rest] = [10, 20, 30, 40, 50];
console.log(x); // 10
console.log(y); // 20
console.log(rest); // [30, 40, 50]


//problems:
//Square and sum the array elements using the arrow function and then find the average of the array.
let arr = [1, 2, 3, 4, 5];
let squaredSum = arr.map(num => num * num).reduce((acc, val) => acc + val, 0);
let average = squaredSum / arr.length;
console.log(average); // 11

//Create a new array using the map function whose each element is equal to the original element plus 5
let originalArray = [1, 2, 3, 4, 5];
let newarray = originalArray.map(num=>num + 5);
console.log(newarray); // [6, 7, 8, 9, 10]

//Filter out all the even numbers from the array using the filter function.
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = nums.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

//Create a new array whose elements are in upper case of words present in the original array.
let words = ['hello', 'world', 'javascript', 'array'];
let upperCase = words.map(words=>words.toUpperCase());
console.log(upperCase); // ['HELLO', 'WORLD', 'JAVASCRIPT', 'ARRAY']

//Find the maximum number from the array using the reduce function.
let numberArray = [10, 5, 8, 20, 3];
let maxNumber = numberArray.reduce((a, b) => (a > b ? a : b));
console.log(maxNumber); // 20

//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.
// The function should return a newarray with the original array values and all of the additional arguments doubled
function doubleAndReturnArgs(arr, ...args) {
    let doubledArgs = args.map(num => num * 2);
    return [...arr, ...doubledArgs];
}
console.log(doubleAndReturnArgs([1, 2, 3], 4, 5)); // [1, 2, 3, 8, 10]

//Write a function called remove Random which accepts an array and removes a random element from the array.
// The function should return a new array with out the removed element.
function removeRandom(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr.filter((_, index) => index !== randomIndex);//
}
console.log(removeRandom([1, 2, 3, 4, 5])); // e.g., [1, 3, 4, 5]

//Write a function called mergeObjects that accepts two objects and returns a new 
// object which contains all the keys and values of the first object and second object
function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
}       
console.log(mergeObjects({a: 1, b: 2}, {c: 3, d: 4})); // {a: 1, b: 2, c: 3, d: 4}

//Write a function called extend that accepts two arrays and returns a  new array which contains allthe  elements of the first array and second array
function extend(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(extend([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

//Write a function called findKey that accepts an object and a callback function. 
// The function should return the first key in the object whose value passes the callback function test.
function findKey(obj, callback) {
    for (let key in obj) {  
        if (callback(obj[key])) {
            return key;
        }
    }
    return undefined;
}
console.log(findKey({a: 1, b: 2, c: 3}, val => val > 1)); // 'b'    
//WriteafunctioncalledremoveKeythatacceptsanobjectandakey.Thefunctionshouldreturnanewobjectwhichcontainsallthekeysandvaluesfromtheoriginalobjectexceptforthekeythatwasremoved
function removeKey(obj, keyToRemove) {
    let {[keyToRemove]: _, ...newObj} = obj;
    return newObj;
}   