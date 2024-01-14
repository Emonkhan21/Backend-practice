
const Userlist = require ('../models/userSchema')
const jwt = require('jsonwebtoken');
function testMiddleware (req,res,next) {
// console.log('ami middleware');
// next()
// console.log(req.headers.authorization);
// if (req.headers.authorization == 12345)
// next()

// else{
//     res.send({error: " Authoraization Not Found"})
// }
var decoded = jwt.verify(req.headers.authorization, 'baig');
console.log(decoded, 'emon');
// console.log(req.headers.authorization);

jwt.verify(req.headers.authorization, 'baig', async function(err, decoded) {
    
   if(err){
    res.json({error: "Authoraization Not Found"})
   }
   else{
    console.log(decoded, 'ytfytfyf');
const users = await Userlist.find({email: decoded.id})
if(users){
    next()
    
}
else{
    res.json({error: "Authoraization Not Found"})
}

   }
  });

// var decoded = jwt.verify(token, 'baig');
// console.log(decoded);

}

module.exports = testMiddleware