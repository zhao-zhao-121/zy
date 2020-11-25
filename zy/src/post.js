const querystring = require('querystring');
 




const post=(req,res,next)=> {
    let arr = [];
   req.on("data", (buffer) => { 
       arr.push(buffer)
    })
   req.on("end", () => {
        let buffer = Buffer.concat(arr);
        let post = querystring.parse(buffer.toString());
        req.body = post;
       next()
   })
}
module.exports = post;