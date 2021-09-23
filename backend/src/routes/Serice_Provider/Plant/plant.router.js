const router = require('express-promise-router')();
const Controller = require('../../../controllers/Service_Provider/Plant/plant.controller');

router.post('/plant/:id', Controller.addPlant);

router.get('/plant', Controller.listPlant);
router.get('/plant/:id', Controller.listPlantID);
router.get('/athukorala/listposts', Controller.listPosts);
router.get('/plant/ongoing/:id', Controller.ongoingID); 
router.get('/plant123/ongoing123', Controller.ongoing); 



router.get('/allproblems/posts', Controller.listProblems);


module.exports = router;