const knex = require("../Database/knex");
const {hash,compare} = require('bcryptjs')
const authConfig = require("../config/auth")

const AppError = require('../utils/App.Error');
const { sign } = require("jsonwebtoken");


class userController {

async create(request,response){

  const {name, email, password,admin} = request.body;
   
  if(!name || !email || !password){
    throw new AppError('Os campos nome, e-mail e senha são obrigatórios!')
  };
  
  const user = await knex("Users").where({email:email}).first();

  if(user){
    throw new AppError('O e-mail informado já está sendo utilizado!')
  };
  
  const securityPassword = await hash(password,8);

  await knex('Users').insert({name,email,password:securityPassword,admin});

  return response.status(201).json({"Message":"Usuário cadastrado com sucesso!"})

}

async sessions(request,response){

  const {email,password} = request.body

  const user = await knex("Users").where({email:email}).first();
  const passwordMatched = await compare(password,user.password)

  if(!user || !passwordMatched){
    throw new AppError("E-mail ou senha inválidos.",401)
  }

  const {secret,expiresIn} = authConfig.jwt

  const token = sign({},secret,{
    subject: String(user.id),
    expiresIn
  })



  

  return response.status(200).json({"user":user,token})
}

}

module.exports = userController