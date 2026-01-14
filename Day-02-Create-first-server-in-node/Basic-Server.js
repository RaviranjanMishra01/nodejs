// Basic Server
const http = require("http");

http.createServer((req, res) => {
    console.log(req);
}).listen(3000, () => {
    console.log("Server running on port 3000");
});