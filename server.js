var http = require("http");
var url = require("url");
var fs = require("fs");

function onRequest(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");
    res.writeHead(200);
    fs.readFile('index.html', function(err, contents){
        if (err) {
            console.log(err);
            throw err; 
            }  else {
                console.log(contents);
                res.write(contents,'utf8');
                res.end();
                }
    });
  }

  http.createServer(onRequest).listen(process.env.PORT);
  console.log("Server has started.");