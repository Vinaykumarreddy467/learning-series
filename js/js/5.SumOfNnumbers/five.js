let n=prompt("enter the number of values to be summed:");
let sum=0;
 for(let i=0;i<=n;i++){
    sum+=i;
 }
    alert(`the sum of first ${n} numbers is ${sum}`);



let str= "";
let text= ["i","love","javascript"];
for(let i=0;i<text.length;i++){
    str+=text[i]+" ";
}
console.log(str.trim());