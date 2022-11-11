const router = require("express").Router();
const { addCategory,viewAllCategory,viewOneCategory} = require('../controllers/categoryController')
 
//add new category
router.post('/add', addCategory);

//view all category
router.get('/',viewAllCategory);

//view one category
router.get('/item/:id', viewOneCategory);
 
module.exports = router;