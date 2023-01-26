const UserController = require('../controllers/controller.user');
const router = require('express').Router();

const userSchema = require('../validators/validator.user');
const validate = require('../middlewares/middleware.validator');

router.post('/register', validate(userSchema), UserController.register);

module.exports = router;