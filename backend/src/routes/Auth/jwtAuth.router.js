const router = require('express-promise-router')();
const Controller = require('../../controllers/Auth/jwtAuth.controller');

router.post('/register',Controller.Register);

router.post('/login',Controller.Login);

router.get('/confirm/:id',Controller.Confirm);

router.post('/forgotpassword',Controller.Forgotpassword)

router.post('/reset',Controller.Reset);

module.exports = router;