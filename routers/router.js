const express = require('express');
const router = express.Router();

let posts = require('../data/post');
const postController = require('../controllers/postController');

const errorsHandler = require('../middlewares/errorsHandler');

const notFound = require('../middlewares/notFound');

//Index
router.get('/', postController.index);

//Show
router.get('/:id', postController.show);

//Store
router.post('/', postController.store);

//Update
router.patch('/:id', postController.update);

//Delete

router.delete('/:id', postController.deleted);

router.use(errorsHandler);

router.use(notFound);

module.exports = router;
