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




  response.status(200).json("Produto cadastrado com sucesso!")

}


}

module.exports = controlProducts