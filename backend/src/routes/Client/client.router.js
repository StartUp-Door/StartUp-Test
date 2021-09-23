const router = require('express-promise-router')();
const Controller = require('../../controllers/Client/client.controller');

router.post('/:id', Controller.addPost);

router.post('/requestTech/:id', Controller.requestTech);
router.post('/requestPlant/:id', Controller.requestPlant);
router.post('/requestFood/:id', Controller.requestFood);

router.put('/requestTechPut/:id', Controller.requestTechPut);
router.put('/requestTechDonotPut/:id', Controller.requestTechPutNot);
router.put('/requestPlantPut/:id', Controller.requestPlantPut);
router.put('/requestPlantDonotPut/:id', Controller.requestPlantPutNot);
router.put('/requestFoodPut/:id', Controller.requestFoodPut);
router.put('/requestFoodDonotPut/:id', Controller.requestFoodPutNot);

router.delete('/deleteTechRequest/:id', Controller.deleteTechRequest);
router.delete('/deleteFoodRequest/:id', Controller.deleteFoodRequest);
router.delete('/deletePlantRequest/:id', Controller.deletePlantRequest);

router.post('/givejob/:id', Controller.givejob);

router.get('/getClient', Controller.listClients);
router.get('/:id', Controller.listClient);
router.get('/clientProfile/:id', Controller.profile);

router.get('/clientNotification/:id', Controller.noti);
router.get('/service/notify/:id', Controller.notify);

router.get('/NotificationTech/:id', Controller.notifromTech); //need to add client id

router.put('/update/profile/:id', Controller.updateClientProfile);


router.post('/plantprob/:id', Controller.addPlantprob);
router.get('/clientNotification/:id', Controller.noti);


module.exports = router;