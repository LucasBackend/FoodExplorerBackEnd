const { verify } = require("jsonwebtoken");
const AppError = require("../utils/App.Error");
const authConfig = require("../config/auth")

function ensureAuthenticated(request,response,next){
  const authHeader = request.headers.authorization;

  if(!authHeader){
    throw new AppError("JWT não foi informado",401)
  }

  const [,token] = authHeader.split(" ");

  try{
    const {sub:user_id} = verify(token,authConfig.jwt.secret);

    request.user = {
      id: Number(user_id)
    }
  }catch{
    throw new AppError("Token de autenticação é inválido")
  }

  return next()

}

module.exports = ensureAuthenticated