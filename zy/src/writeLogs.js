const fs =require('fs');




const writeLogs =(req,res,next)=>{


    let time = new Date();
   let m="";
    y = `${time.getFullYear()}`;
    s= `${time.getMonth()+1}`;
    d= `${time.getDate()}`;
    m=y+s+d;
    let hours=time.getHours();
    let minutes=time.getMinutes();
    let seconds=time.getSeconds();

    const infoStr = `访问时间:${y}-${s}-${d} ${hours}:${minutes}:${seconds},访问方式:${req.method},ip地址:${req.ip},访问所用浏览器信息:${req.headers["user-agent"]},\n`
    fs.appendFile(`./logs/${m}.log.txt`, infoStr, (err) => {
        console.log(req.ip);
        next()
    })
}
module.exports = writeLogs;