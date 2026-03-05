function errorsHandler(err, req, res, next) {
  res.status(500);
  res.json({
    error: err.message,
    message: 'Il tuo errore è qui',
  });
}

module.exports = errorsHandler;
