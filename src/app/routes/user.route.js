const express =  require('express')
const usercontrol = require('../controllers/user.controller');
const router = express.Router();

router.get('/', usercontrol.GetAll);
module.exports = router;


