const express = require("express");
const request = require("request");
const app = express();

app.get('/',(err,res)=>{
    console.log("Hi there!!");
})


app.listen(4444,function(){
    console.log("Welcome to new World!!!");
})