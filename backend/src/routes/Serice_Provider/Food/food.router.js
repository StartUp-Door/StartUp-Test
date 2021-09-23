const router = require('express-promise-router')();
const Controller = require('../../../controllers/Service_Provider/Food/food.controller');

router.post('/food/:id', Controller.addFood); 

router.get('/food', Controller.listFood);
router.get('/food/:id', Controller.listFoodID);
router.get('/tharaka/listposts', Controller.listPosts);
router.get('/food/ongoing/:id', Controller.ongoingID);
router.get('/food123/ongoing123', Controller.ongoing);

module.exports = router;