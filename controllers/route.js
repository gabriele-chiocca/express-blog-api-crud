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

function create(req, res) {
  res.send('Creazione nuovo post');
}

function update(req, res) {
  res.send('Modifica parziale del post ' + req.params.id);
}

function deleted(req, res) {
  const id = Number(req.params.id);

  const post = postsData.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({
      error: 'Post non trovato',
    });
  }

  const Index = postsData.indexOf(post);
  postsData.splice(Index, 1);

  res.json({
    message: 'Post eliminato',
    deletedPost: post,
  });
}

module.exports = { index, show, create, update, deleted };
