const express = require('express');
const router = express.Router();

let posts = require('../data/post');
const postController = require('../controllers/route');

//Index
router.get('/', postController.index);

//Show
router.get('/:id', postController.show);

//Create
router.post('/', postController.create);

//Update
router.put('/:id', postController.update);

//Delete

router.delete('/:id', postController.deleted);

module.exports = router;
