const express = require("express");

const app = express();

app.use(express.json()); // body read karne ke liye

// temporary database
let todos = [];

/* 1️⃣ Get all todos */
app.get("/todos", (req,res)=>{
res.json(todos);
});

/* 2️⃣ Add todo */
app.post("/todos", (req,res)=>{

const newTodo = {
id: Date.now(),
task: req.body.task
};

todos.push(newTodo);

res.json({
message:"Todo added",
todos
});

});

/* 3️⃣ Delete todo */
app.delete("/todos/:id", (req,res)=>{

const id = req.params.id;

todos = todos.filter(todo => todo.id != id);

res.json({
message:"Todo deleted",
todos
});

});

/* Server start */
app.listen(5000, ()=>{
console.log("Server running on port 5000");
});