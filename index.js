const express= require("express");
const app = express();
const path = require("path");
const port = 5000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req,res)=>{
    res.render("home.ejs");
});

app.use(express.static("public"))

app.get("/rolldice", (req,res)=>{
    let diceValue = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {diceValue});
});

app.get("/ig/:username", (req,res)=>{
    // const followers = ["tony","steve", "bruce", "clint", "thor"];
    let {username} = req.params;
    const instaData = require("./data.json");
    console.log(instaData);
    const data = instaData[username];
    res.render("ig.ejs", { data });
})

app.listen(port, ()=>{
    console.log(`port is listening on ${port}`);
});