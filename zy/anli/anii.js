const express = require("express");
const app = express();
const datas = require("./router/data")
app.use(datas);


app.listen(8080,()=>{
    console.log("http://127.0.0.1:8080")
})