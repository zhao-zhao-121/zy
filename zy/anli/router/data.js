const fs = require("fs");
const os = require("os");

var dates=function(req,res,next){
    let time = new Date();
    let m = "";
    m = `${time.getFullYear()}`;
    m += `${time.getDate()}`;
    m += `${time.getMonth()+1}`;
    let str = "";
    str +=  req.headers.host +";"
    str +=  time +";"
    str +=  req.method +";"
    str +=  req.url + ";"
    str +=  req.headers["user-agent"]
    str += os.EOL
    req.on("data",()=>{
        fs.appendFile(`./logs/${m}.log.txt`,str,err=>{})
    })
    next()
}

module.exports = dates;