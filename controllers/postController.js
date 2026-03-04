let postsData = require('../data/post');

function index(req, res) {
  let posts = [...postsData];

  const searchFilter = req.query.search;

  if (searchFilter) {
    posts = posts.filter((post) => {
      const normalizedName = post.title.toLowerCase().trim();

      const normalizedFilter = searchFilter.toLowerCase().trim();

      return (
        normalizedName.includes(normalizedFilter) ||
        post.tags.some((tag) =>
          tag.toLowerCase().trim().includes(normalizedFilter),
        )
      );
    });
  }
  return res.status(200).json(posts);
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

function store(req, res) {
  console.log(req.body);
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

module.exports = { index, show, store, update, deleted };
