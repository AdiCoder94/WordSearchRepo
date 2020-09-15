const accessTokenSecret = require('./constants').accessTokenSecret
var jwt = require('jsonwebtoken')


// middleware to validate jwt token
const authenticateJWT = function(req, res, next){
  const authHeader = req.header('Authorization')
  
  if(authHeader){
    const token  = authHeader.split(' ')[1]
    jwt.verify(token, accessTokenSecret, (err, JWTToken) => {
      if(err){ return res.sendStatus(403) }
      req.currentUser = JWTToken
      next();
    })
  }else { 
    res.sendStatus(401) }
  }

module.exports = {
  authenticateJWT: authenticateJWT
}
