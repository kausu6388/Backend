const express = require('express');

const app = express();



app.use(express.json()); // body read karega

app.get("/sum", (req , res)=>{
    const a = req.body.a;
    const b = req.body.b;

    res.send("Sum = " + (a + b));
    // const a = req.query.a;
    // const b = req.query.b;

    // res.send(parseInt(a) +parseInt(b));
   
});
app.get("/sub", (req , res)=>{
    // const c = req.query.c;
    // const d = req.query.d;

    // res.send(parseInt(c) - parseInt(d));
});
app.get("/mul", (req , res)=>{
    // const e = req.query.e;
    // const f = req.query.f;

    // res.send(parseInt(e) * parseInt(f));
});



// SUM
app.post("/sum", (req,res)=>{
    const a = req.body.a;
    const b = req.body.b;

    res.send(parseInt(a) +parseInt(b));
});

// SUB
app.post("/sub", (req,res)=>{
    const a = req.body.a;
    const b = req.body.b;

    res.send("Subtraction = " + (a - b));
});

// MULTIPLY
app.post("/mul", (req,res)=>{
    const a = req.body.a;
    const b = req.body.b;

    res.send("Multiplication = " + (a * b));
});

app.listen(3000 , ()=>{
    console.log("server running");
})