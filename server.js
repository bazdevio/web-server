var http = require('http');
var discbot = require('./')

//create a server object:
http.createServer(function (req, res) {

  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8123);

function add (int,int2){
  return int + int2
}
