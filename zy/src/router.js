const express = require("express");
const router = express.Router();
router.post('/index', (req, res) => {
    res.send( JSON.stringify(req.body))
    
}); 

router.get('/zy/1.txt',(req,res)=>{});
 
module.exports = router;