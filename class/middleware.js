const express = require("express");

const app = express();


app.use(express.json());


app.use((req, res, next) => {
    console.log(
        `${new Date().toLocaleString()} | ${req.ip} | ${req.method} | ${req.originalUrl}`
    );

   
});


app.get("/", (req, res) => {
    res.send("GET request received");
});

app.post("/add", (req, res) => {
    res.send("POST request received");
});


app.listen(5000, () => {
    console.log("Server running on port 5000");
});