function errorsHandler(err, req, res, next) {
  res.stauts(500);
  res.json({
    error: err.message,
  });
}

module.exports = errorsHandler;
