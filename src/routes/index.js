const {Router} = require('express');

const userRoutes = require('./users.routes');
const productRoutes = require('./product.routes');
const favoriteProducts = require("../routes/favoriteProduct.routes")


const router = Router();

router.use('/users',userRoutes);
router.use('/product',productRoutes);
router.use('/favorite',favoriteProducts);





module.exports = router