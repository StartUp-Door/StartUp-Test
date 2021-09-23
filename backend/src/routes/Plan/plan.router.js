const router = require('express-promise-router')();
const Controller = require('../../controllers/Plan/plan.controller');

router.post('/payment', Controller.addPayment);

router.get('/route/:id', Controller.routeServiceProvider);

router.get('/serviceprovider/:id', Controller.serviceprovider);

module.exports = router;