const router = require('express-promise-router')();
const Controller = require('../controllers/controller');

router.post('/category', Controller.product);

router.post('/test', Controller.test);

router.get('/category', Controller.listAllCategory);

router.get('/category/:id', Controller.findCategoryById);

router.delete('/category/:id', Controller.deleteCategoryById);

module.exports = router;