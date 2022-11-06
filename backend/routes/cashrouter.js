const router = require("express").Router();
const { addCash, viewAllCash } = require('../controllers/cashcontroller.js')
 
//add new Cash
router.post('/add', addCash);
 
//view all Cashs
router.get('/',viewAllCash);

 
module.exports = router;