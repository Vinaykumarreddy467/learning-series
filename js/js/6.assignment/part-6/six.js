//Write a JavaScript function that returns array elements larger than a number.
let arr=[23,45,73,28,11,9];
let num=45;
for(let i=0;i<arr.length;i++){
    if(arr[i]>num){
        console.log(arr[i]);
    }
}


//find the unique charecters in a string.
let str = "abcdabcdefgggh";
let uniqueChars = "";
for(let i=0; i<str.length;i++){
    if(uniqueChars.indexOf(str[i]) === -1){
        uniqueChars += str[i];
    }           
}
console.log(uniqueChars);

//Write a JavaScript function to find the longest country name from a given array of country names.
let country=["Australia","Germany","United States of America"];
let longest="";
for(let i=0;i<country.length;i++){
    if(country[i].length>longest.length){
        longest=country[i];
    }
}
console.log(`${longest}`);


//Write a JavaScript function to count the number of vowels in a String argument.
let string="I love javascript";
let count=0;
let vowels="aeiouAEIOU";
for(let i=0;i<string.length;i++){
    if(vowels.indexOf(string[i]) !== -1){
        count++;
    }
}
console.log(`the number of vowels in the string is ${count}`);


//Write a JavaScript function to generate a random number with in a range(start,end).
function getRandomNumber(start,end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
console.log(getRandomNumber(1,3));
console.log(getRandomNumber(50,150));