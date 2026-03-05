const express = require('express');
const router = express.Router();

let posts = require('../data/post');
const postController = require('../controllers/postController');

const routeManagement = require('../middlewares/errorsHandler');

router.use(routeManagement);

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

module.exports = router;
