
const jwt = require('jsonwebtoken');

exports.tokenCheck=(req,res,next)=>{
    let token=req.headers.authorization;
 
    jwt.verify(token, 'h45fggf', function(err, decoded) {
       if(decoded){
           res.user=decoded;
           next();
       }
       else{
          
           res.json({status:false})
       }
      });
}