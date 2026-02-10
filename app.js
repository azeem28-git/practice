const express = require("express");
const app = express()
const port= 8080;

app.get("/main", (req, res)=>{
    console.log(req);
    console.log("request received");
    res.send("this is a nodemon check");
})

app.get("/", (req, res)=>{
 console.log(req);
 console.log("request received");
 let data = ("<h1> Marvel Studios </h1> <ul><li>Iron man</li><li>Thor</li><li>Captain America</li><li>Black Widow</li><li>Hulk</li></ul>");
 res.send(data);
})

app.get("/iron", (req,res)=>{
    res.send("this is get main path");
})

app.get("/cap", (req,res)=>{
    res.send("this is post main path");
})

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});
