var http = require("http");

http.createServer(function(req, res) {
    res.writeHead(200, "Content-type : plain/text");
    res.write("Wazzup guys, this is nodepad");
    res.end();
}).listen(process.env.PORT, process.env.IP);