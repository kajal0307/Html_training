var http = require('http');
var fs=require('fs');
const { clearScreenDown } = require('readline');
http.createServer(function(req,res)
{
    fs.readFile('aa.html',function(err,data)
    {
        if(err)
        console.log(err);
        else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        }
    });
}
).listen(8080)