const express = require("express");
const bodyParser = require("body-parser");
const PORT = 8080;


const app = express();

//app.use(bodyParser);

app.get("/health", (req, res)=>{
    res.send("SERVER IS RUNNING");
});


app.listen(PORT,()=>{
    console.log("server has started");
})