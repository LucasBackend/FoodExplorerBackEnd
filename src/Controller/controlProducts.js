const DiskStorage = require('../providers/DiskStorage');
const knex = require('../Database/knex/index');
const AppError = require('../utils/App.Error');


class controlProducts{

async create(request,response){

  const user_id = request.user.id;

  const {name,category,price,description, ingredients} = request.body;

  const user = await knex('Users').where({id:user_id}).first();

  const priceFloat = parseFloat(price).toFixed(2)
  
  const fileProduct = request.file.filename;

  if(!user.admin || !user){
    throw new AppError("Sem autorização, apenas administradores podem criar produtos", 401)
  } 

  if(!name || !category || !price || ! description || !fileProduct || !ingredients){
    throw new AppError("Todos os ingredientes são necessários para cadastrar o produto.")
  }

  const diskstorage = new DiskStorage();

  const filename = await diskstorage.savefile(fileProduct);

  const product = {
    name,
    category,
    price:priceFloat,
    image: filename,
    description,
    user_id

  };

  const [productId] = await knex("Products").insert(product).returning("id");

  const ingredientsList = ingredients.split(",")

  const productList = ingredientsList.map(produto=>{
    const productNoSpace = produto.trim();

    return {
      name: productNoSpace,
      product_id:productId.id,
    }

  })

  await knex("Ingredients").insert(productList)




  return response.status(200).json("Produto cadastrado com sucesso!")

}

async index(request,response){

  const allProducts = await knex("Products");

  const user_id = request.user.id

  const {search} = request.body
  

  const allIngredients = await knex("Ingredients");

  const allFavoritesProducts = await knex("FavoriteProducts").where({user_id})

 const products = allProducts.map(product=>{
    const filterIngredients = allIngredients.filter(ingredients=> ingredients.product_id === product.id);
    const filterFavoriteProducts =  allFavoritesProducts.filter(fav=> fav.product_id === product.id)

    return {
      ...product,
      ingredients: filterIngredients,
      favorite: filterFavoriteProducts.length > 0
    }

  })

  if(search){
  const productSearch = products.filter(product=> 
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.ingredients.some(ingredient => ingredient.name.toLowerCase().includes(search.toLowerCase())))
  
    return response.status(200).json(productSearch)
  }else{
    const productSearch = products;

    return response.status(200).json(productSearch)
  }

  

  
}

async delete(request,response){
 const {product_id} = request.params
 const user_id = request.user.id

 if(!product_id){
  throw new AppError("ID do produto é obrigatório!",401)
}

const user = await knex("Users").where({id:user_id}).first();

if(!user.admin){
  throw new AppError("Apenas administradores podem deletar produtos!")
}

await knex("Products").where({id:product_id}).delete();

return response.status(200).json()





}



}

module.exports = controlProducts