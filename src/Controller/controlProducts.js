const DiskStorage = require('../providers/DiskStorage')

class controlProducts{

async create(request,response){

  const fileProduct = request.file.filename

  const diskstorage = new DiskStorage();

  const filename = await diskstorage.savefile(fileProduct)

  response.status(200).json(filename)

}


}

module.exports = controlProducts