const express = require("express");
const bodyParser = require("body-parser");



const app = express();

//app.use(bodyParser);

app.get("/health", (req, res)=>{
    res.send("SERVER IS RUNNING");
});


app.listen(3000,()=>{
    console.log("server has started");
})