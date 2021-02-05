var express=require('express');
var app=express();

app.get('/',function(req,res){
    res.send("Hello world!");
});
app.get('/form',function(req,res){
    res.send("Hiiiiiiiistart!");
});
app.listen(5000);