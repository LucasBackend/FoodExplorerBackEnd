const knex = require('../Database/knex/index.js')
const DiskStorage = require('../providers/DiskStorage.js')

class updateImageController{

    async update(request,response){
        const {id} = request.body

        const idNumb = Number(id)

        const filename = request.file.filename
        
        const diskstorage = new DiskStorage()

        const product = await knex('Products').where({id:idNumb}).first()

        const file = await diskstorage.savefile(filename)

        await diskstorage.deleteFile(product.image)

        await knex('Products').update({image:file}).where({id:idNumb})

        

        return response.status(200).json({})

    
        


    }

}

module.exports = updateImageController