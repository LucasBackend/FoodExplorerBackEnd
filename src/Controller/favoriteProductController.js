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

  async index(request,response){
    const user_id = request.user.id

    const favoriteArray = await knex("FavoriteProducts")
    .select(
      "FavoriteProducts.id",
      "Products.name"
      
      )
    .where({"FavoriteProducts.user_id":user_id})
    .innerJoin("Products","Products.id","=","FavoriteProducts.product_id")

    return response.json(favoriteArray)
    
  }

  async delete(request,response){
    const {id} = request.params

    await knex("FavoriteProducts").where({id}).delete()

    return response.status(200).json({})


  }

}

module.exports = favoriteProductController