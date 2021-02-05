var http=require('http')
http.createserver(function(req,res)
{
    res.writeHead(200,{'content_Type':'text/plain'});
    res.write('Hello\n');
}