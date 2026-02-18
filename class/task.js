const http = require("http");
const fs = require("fs");


const server = http.createServer((req , res)=>{
    const date  = new Date().toString();
    const log = req.method;
    const path = req.url;

    const logdata = date + " " + log + " " + path + "\n";
    fs.appendFile("./log.txt", logdata , () =>{});

    res.end("server running");

     

});
server.listen(3000 , ()=>{
    console.log("server running on 3000");
})