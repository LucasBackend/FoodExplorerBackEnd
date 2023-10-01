const {Router} = require('express');

const userRoutes = require('./users.routes');
const productRoutes = require('./product.routes')


const router = Router();

router.use('/users',userRoutes);
router.use('/product',productRoutes);





module.exports = router