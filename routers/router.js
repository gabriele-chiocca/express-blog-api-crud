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

router.delete('/:id', function (req, res) {
  const id = Number(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({
      error: 'Post non trovato',
    });
  }

  const Index = posts.indexOf(post);
  posts.splice(Index, 1);

  res.json({
    message: 'Post eliminato',
    deletedPost: post,
  });
});

module.exports = router;
