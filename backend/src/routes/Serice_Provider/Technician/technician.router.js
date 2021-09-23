const router = require('express-promise-router')();
const Controller = require('../../../controllers/Service_Provider/Technician/technician.controller');

router.post('/technicianAdd/:id', Controller.addTech); //need to add id.....(cid)

router.post('/bid/:id', Controller.addBid); //
router.get('/viewBid/:id', Controller.viewBid);
router.delete('/deleteBid/:id', Controller.deleteBid); 

router.get('/technician', Controller.listTech);
router.get('/technician/posts', Controller.listPosts);
router.get('/technician/:id', Controller.listTechID);   
router.get('/technician/rightbar/:id', Controller.right);   
router.get('/technician/ongoing/:id', Controller.ongoingID);   
router.get('/technician123/ongoing123', Controller.ongoing);   

router.put('/technician/:id', Controller.updateTechJob);


router.post('/solution/:id', Controller.addSolu);
router.get('/viewSolution/:id', Controller.viewSolu);
router.delete('/deleteSolution/:id', Controller.deleteSolu); 

module.exports = router;