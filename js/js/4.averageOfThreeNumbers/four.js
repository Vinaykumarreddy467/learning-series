//average of three numbers
function average(num1, num2, num3){
    return (num1 + num2 + num3) / 3;
}
// console.log(average(5, 10, 15)); 
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let num3 = parseFloat(prompt("Enter third number:"));
let avg = average(num1, num2, num3);
alert(`The average of ${num1}, ${num2}, and ${num3} is ${avg}`);