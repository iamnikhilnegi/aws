const express = require("express");
const bodyParser = require("body-parser");
const PORT = 8080;


const app = express();

//app.use(bodyParser);

app.use(express.static(__dirname + '/public/'))
app.get("/",(req,res)=>{
    res.sendfile("index.html");
})
app.get("/health", (req, res)=>{
    res.send("SERVER IS RUNNING");
});


app.listen(PORT,()=>{
    console.log("server has started");
})