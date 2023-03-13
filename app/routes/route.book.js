const BookController = require('../controllers/controller.book');

const router = require('express').Router();

router.route('/')
    .get(BookController.list)
    .post(BookController.store);

module.exports = router;