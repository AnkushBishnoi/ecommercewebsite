const Errorhandler = require("../utils/errorHander");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // wrong Mongodb Id error 
  if(err.name === "CastError"){
    const message = `Resource not Found. Invalid: ${err.path}`
    err = new Errorhandler(message,404)
  }

  // mongoose duplicate key error
  if(err.code === 11000){
    const message = `Dupicate ${Object.keys(err.keyValue)} Entered!`
    err = new Errorhandler(message,404)
  }
  // wrong JWT error 
  if(err.name === "JsonWebTokenError"){
    const message = `Json Web Token is invalid, Try again`
    err = new Errorhandler(message,404)
  }
// jwt expire error
if(err.name === "TokenExpireError"){
  const message = `Json Web Token has Expired, Try again`
  err = new Errorhandler(message,404)
}
  res.status(err.statusCode).json({
    success: false,
    message: err.message
  });
};
