const knex = require("../Database/knex");
const {hash,compare} = require('bcryptjs')

const AppError = require('../utils/App.Error');


class userController {

async create(request,response){

  const {name, email, password} = request.body;
  
  
  if(!name || !email || !password){
    throw new AppError('Os campos nome, e-mail e senha são obrigatórios!')
  };
  
  const user = await knex("Users").where({email:email}).first();

  if(user){
    throw new AppError('O e-mail informado já está sendo utilizado!')
  };
  
  const securityPassword = await hash(password,8);

  await knex('Users').insert({name,email,password:securityPassword});

  return response.status(201).json({"Message":"Usuário cadastrado com sucesso!"})

}

}

module.exports = userController