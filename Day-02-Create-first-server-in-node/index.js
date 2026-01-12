const http = require("http") //pre build module in js

http.createServer((req,res)=>{console.log(req)}).listen(3000,()=>{console.log(`server is starts and listen port number is =>3000`)})