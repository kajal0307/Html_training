//var module=require('module_name');
var http=require("http");
var server=http.createServer(function(req,res){
    console.log("hii");
}).listen(5000);