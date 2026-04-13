const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    // check DELETE method
    if (req.method === "DELETE") {

        // get id from URL  (example: /delete?id=2)
        const url = new URL(req.url, `http://${req.headers.host}`);
        const id = url.searchParams.get("id");

        // open data.json
        fs.readFile("data.json", "utf8", (err, data) => {

            if (err) {
                res.writeHead(500);
                return res.end("Error reading file");
            }

            let arr = JSON.parse(data);

            // remove object with matching id
            arr = arr.filter(item => item.id != id);

            // write updated array
            fs.writeFile("data.json", JSON.stringify(arr, null, 2), (err) => {

                if (err) {
                    res.writeHead(500);
                    res.end("Error deleting data");
                } else {
                    res.writeHead(200, {"Content-Type":"application/json"});
                    res.end(JSON.stringify({message:"Item deleted successfully"}));
                }

            });

        });

    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});