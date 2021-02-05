var http= require('http');
var datetime= require('./newdate');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write("the date and time are:" + datetime.date_time());
    res.end();
}).listen(4000);