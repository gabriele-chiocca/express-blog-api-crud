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

  //Error Test
  if (post.id === 999) {
    return next(new Error('Errore generato manualmente'));
  }

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
  const newId = postsData[postsData.length - 1].id + 1;

  const newPost = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags,
  };

  postsData.push(newPost);

  console.log(postsData);

  res.status(201);
  res.json(newPost);
}

function update(req, res) {
  const id = Number(req.params.id);

  const post = postsData.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({
      error: 'Post non trovato',
    });
  }

  post.title = req.body.title;
  post.content = req.body.content;
  post.image = req.body.image;
  post.tags = req.body.tags;

  console.log(postsData);

  res.json(post);
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
