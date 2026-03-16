const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    if (req.method === "POST") {

        let body = "";

        // receive data from request body
        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {

            const newData = JSON.parse(body);

            // read existing data.json
            fs.readFile("data.json", "utf8", (err, data) => {

                let arr = [];

                if (!err && data) {
                    arr = JSON.parse(data);
                }

                // add new object
                arr.push(newData);

                // write updated array
                fs.writeFile("data.json", JSON.stringify(arr, null, 2), (err) => {

                    if (err) {
                        res.writeHead(500);
                        res.end("Error saving data");
                    } else {
                        res.writeHead(200, { "Content-Type": "application/json" });
                        res.end(JSON.stringify({ message: "Data added successfully" }));
                    }

                });

            });

        });

    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});