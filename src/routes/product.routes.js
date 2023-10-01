const {Router} = require('express');
const multer = require('multer');
const {MULTER} = require('../config/upload')

const uploadFile = multer(MULTER)

const controlProducts = require('../Controller/controlProducts');
const controlproducts = new controlProducts;
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const router = Router();

router.use(ensureAuthenticated)

router.post('/create',uploadFile.single('file'),controlproducts.create);
router.get('/index',controlproducts.index)



module.exports = router