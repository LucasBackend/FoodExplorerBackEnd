const {Router} = require('express');
const multer = require('multer');
const {MULTER} = require('../config/upload')

const uploadFile = multer(MULTER)

const controlProducts = require('../Controller/controlProducts');
const controlproducts = new controlProducts

const router = Router();

router.post('/create',uploadFile.single('file'),controlproducts.create);



module.exports = router