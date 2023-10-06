const {Router} = require('express');

const userController = require('../Controller/userController');
const usercontroller = new userController;

const router = Router();

router.post('/create',usercontroller.create);
router.post('/session',usercontroller.sessions);


module.exports = router