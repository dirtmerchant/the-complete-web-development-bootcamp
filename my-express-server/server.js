//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res){
    response.send("<h1>Hello World!</h1>");
    console.log(request);


})


app.listen(3000);
{
    console.log("server has started on port 3000");
}
