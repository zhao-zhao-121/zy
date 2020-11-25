const express = require("express");
const writeLogs = require("./src/writeLogs");
const postdata = require("./src/post")
const router = require("./src/router");



const app = express();
 
app.use(writeLogs);
 
app.use(express.static("../zy"))
 

app.use(postdata)
 
app.use(router)

app.listen(8080,'0.0.0.0', () => {
    console.log("server is running at http://127.0.0.1:8080")
})