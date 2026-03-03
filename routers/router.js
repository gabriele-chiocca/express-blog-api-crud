const express = require('express');
const router = express.Router();

let posts = require('../data/post');
const postController = require('../controllers/route');

//Index
router.get('/', postController.index);

//Show
router.get('/:id', function (req, res) {
  const id = Number(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({
      error: 'Post non trovato',
    });
  }

  res.status(200).json({
    message: 'Dettaglio post singolo',
    detailPost: post,
  });
});

//Create
router.post('/', function (req, res) {
  res.send('Creazione nuovo post');
});

//Update
router.put('/:id', function (req, res) {
  res.send('Modifica parziale del post' + req.params.id);
});

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
