let postsData = require('../data/post');

function index(req, res) {
  postsData;

  res.status(200).json(postsData);
}

function show(req, res) {
  const id = Number(req.params.id);
  const post = postsData.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({
      error: 'Post non trovato',
    });
  }

  res.status(200).json({
    message: 'Dettaglio post singolo',
    detailPost: post,
  });
}

module.exports = { index, show };
