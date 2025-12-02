let todo=[];

let request= prompt("What do you want to do?");

while(true){
    if(request==="quit"){
        console.log("OK, YOU QUIT THE APP");
        break;
    }   
    if(request==="list"){
        console.log("**********");
        for(let i=0;i<todo.length;i++){
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("**********");
    }
    else if(request==="add"){
        let newTodo= prompt("Enter new todo");
        todo.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }
    else if(request==="delete"){
        let index= parseInt(prompt("Enter index of todo to delete"));
        if(!Number.isNaN(index)){
            let deleted= todo.splice(index,1);
            console.log(`Deleted task: ${deleted[0]}`);
        } else {
            console.log("Invalid index");
        }   
    }
    request= prompt("What do you want to do?");
}