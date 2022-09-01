//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/bmicalculator",function(req,res){

    var num1 = parseFloat(req.body.weight);
    var num2 = parseFloat(req.body.height);

    var result = parseFloat(num1/(num2*num2)).toFixed(2);
    res.send("Your BMI is "+result);
});

app.listen(3000,function(){
    console.log("server started on 3000");
});