const student = {
    name: "vinay", age: 23, marks: 90, city: "bangluru"
}


// Generate a random number between 0 and 1
let num=Math.random(); 
console.log(num);
let rounded= Math.floor(num*100);
console.log(rounded);

// Generate a random number between 1 and 100
let ran= Math.floor(Math.random()*100)+1;
console.log(Math.floor(ran));


const max=prompt("enter the max number");
const randnum=Math.floor(Math.random()*max)+1;
console.log(randnum);

let guess=prompt("guess the number:");
while(true){
    if(randnum==guess){
        console.log("you are right!")
        alert("you are right!");
        break;
    }
    else if(guess=="quit"){
        console.log("user Quit");
        alert("thank you user");
        break;
    }else{
        guess=prompt("your guess was wrong! try again")
    }
}