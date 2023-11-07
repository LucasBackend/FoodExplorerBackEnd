const {Router} = require('express');
const multer = require('multer');
const {MULTER} = require('../config/upload')

const uploadFile = multer(MULTER)

const controlProducts = require('../Controller/controlProducts');
const controlproducts = new controlProducts;
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const uploadImageController = require('../Controller/updateImageController')
const uploadimagecontroller = new uploadImageController()

const router = Router();

router.use(ensureAuthenticated)

router.post('/create',uploadFile.single('file'),controlproducts.create);
router.post('/index',controlproducts.index);
router.get('/item/:id',controlproducts.item)
router.delete('/delete/:product_id',controlproducts.delete)
router.put('/update',controlproducts.update)
router.patch('/updateImage',uploadFile.single('file'),uploadimagecontroller.update)



module.exports = router