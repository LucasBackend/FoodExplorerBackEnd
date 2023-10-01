const knex = require('../Database/knex/index')
const AppError = require('../utils/App.Error')

class favoriteProductController{

  async create(request,response){
    const user_id = request.user.id
    const {product_id} = request.body

    if(!user_id || !product_id){
      throw new AppError("O id do usuário ou do produto é inválido!",401)
    }

    await knex("FavoriteProducts").insert({user_id,product_id});

    return response.status(200).json("O item foi favoritado com sucesso!");
  }

}

module.exports = favoriteProductController