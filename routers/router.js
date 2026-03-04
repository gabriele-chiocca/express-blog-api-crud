const express = require('express');
const router = express.Router();

let posts = require('../data/post');
const postController = require('../controllers/postController');

//Index
router.get('/', postController.index);

//Show
router.get('/:id', postController.show);

//Store
router.post('/', postController.store);

//Update
router.put('/:id', postController.update);

//Delete

router.delete('/:id', postController.deleted);

module.exports = router;
