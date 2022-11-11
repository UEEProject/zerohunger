const router = require("express").Router();
const { addImprove, viewAll, updateImproveData, deleteRequest } = require('../controllers/improveController.js')
 
//add new Cash
router.post('/add', addImprove);
 
//view all Cashs
router.get('/',viewAll);

//update requests
router.put('/:id',updateImproveData);

//delete requests
router.put('/delete/:id',deleteRequest);

module.exports = router;