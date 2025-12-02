function rollthedice() {
    return Math.floor(Math.random()*6)+1;
}
console.log(rollthedice());

console.log("Welcome to Dice Roller");
let play= prompt("Do you want to roll the dice? (yes/no)");
while(true){
    if(play==="yes"){
        let dice= rollthedice();
        alert(`you have rolled ${dice} Press enter to continue...`);
        console.log(`You rolled a ${dice}`);
        play= prompt("Do you want to roll again? (yes/no)");
       
    } else if(play==="no"){
        console.log("Thank you for playing Dice Roller!");
        break;
    } else {
        play= prompt("Invalid input. Please enter 'yes' or 'no':");
    }
}