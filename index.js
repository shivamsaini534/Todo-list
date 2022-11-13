
console.log("input")
let input = prompt("what would you like to do?");

const todos = ["Collect Eggs","Clean Litter Box"]
while(input !== "quit" && input !== 'q') {
    console.log("input", input)
    if(input === 'list'){
          console.log('*************')
          for(let i = 0; i < todos.length ; i++){
            console.log(`${i}: ${todos[i]}`)
          }
          console.log('*************')
    } else if(input === 'new'){
        const newTodo = prompt('ok, what is the new Todo?')
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    }
    input = prompt("what would you like to do?")
}
console.log("Ok Quit The App!")