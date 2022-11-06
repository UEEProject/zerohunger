const router = require("express").Router();
const { addStartBusiness, viewAll, updateStartIdeaData, deleteRequest } = require('../controllers/startIdeasController.js')
 
//add new Cash
router.post('/add', addStartBusiness);
 
//view all Cashs
router.get('/',viewAll);

//update requests
router.put('/:id',updateStartIdeaData);

//delete requests
router.put('/delete/:id',deleteRequest);

module.exports = router;