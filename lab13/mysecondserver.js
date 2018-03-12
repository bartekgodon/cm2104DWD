var http = require("http");
var currentdate = require("./mymodule");

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('The date and time currently: ' + currentdate.myDateTime());
  res.end('Hello World!');
}).listen(8080);
