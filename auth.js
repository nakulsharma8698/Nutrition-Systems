const jwt=require('jsonwebtoken');
const  accessTokenSecret= 'iamnakul';
function auth(req, res, next)
{
    const token=req.header('x-auth-token');
    if(!token)  res.status(401).json({msg: "No Token"});
    try
    {
       
        const decoded=jwt.verify(token, accessTokenSecret );
        req.user=decoded;
        next();
    }
    catch(e)
    {
        res.status(400).json({msg:"tokrn not valid"});
    }
}
module.exports=auth;