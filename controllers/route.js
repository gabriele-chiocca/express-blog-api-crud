let postsData = require('../data/post');

function index(req, res) {
  postsData;

  res.status(200).json(postsData);
}

module.exports = { index };
