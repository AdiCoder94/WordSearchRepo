const accessTokenSecret = require('./constants').accessTokenSecret
var jwt = require('jsonwebtoken')

// middleware to validate jwt token
const authenticateJWT = function(req, res, next){
  const authHeader = req.headers.authorization
  
  if(authHeader){
    jwt.verify(authHeader, accessTokenSecret, (err, JWTToken) => {
      if(err){ return res.sendStatus(403).send(err) }
      req.currentUser = JWTToken
      next();
    })
  }else { 
    res.sendStatus(401) }
  }

module.exports = {
  authenticateJWT: authenticateJWT
}

// return res.sendStatus(403)