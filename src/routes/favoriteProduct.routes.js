const {Router} = require('express');

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const favoriteProductController = require('../Controller/favoriteProductController');
const favoriteproductcontroller = new favoriteProductController();

const router = Router();

router.post('/create',ensureAuthenticated,favoriteproductcontroller.create);
router.get('/index',ensureAuthenticated,favoriteproductcontroller.index);
router.delete('/delete/:id',ensureAuthenticated,favoriteproductcontroller.delete);



module.exports = router