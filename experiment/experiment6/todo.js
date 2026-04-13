// fs module declear

const fs = require('fs');
const path = require('path');

const TODO_FILE = path.join(__dirname, 'todo.json');

// declare path
console.log(TODO_FILE);

// read todo function
function readTodos() {
const data = fs.readFileSync(TODO_FILE,"utf-8");
return JSON.parse(data);
}
// declare path
console.log(readTodos());

// write todo function
function writeTodos(todos) {
    fs.writeFileSync(TODO_FILE,JSON.stringify(todos,null,2));
}

// add todo function
function addTodo(task) {
    const todos = readTodos();

    const newTodo = {
        id:Date.now(),
        task:task,
        done:false
    };
    todos.push(newTodo);
    writeTodos(todos);

// decleare path
    console.log("Todo added successfully",task);
}

// add data to todo.json
addTodo("Complete homework");
addTodo("Go to the gym");
addTodo("Call mom");

// list todo function
    function listTodos() {
    const todos =readTodos();

    if (todos.length ===0) {
    console.log("📭 No todos found!");
    return;
    }

    todos.forEach((todo, index) => {
    const status = todo.done ?"✅" :"❌";
    console.log(`${index + 1}.${status}${todo.task}`);
    });
    }

    listTodos();