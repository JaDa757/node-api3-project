function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} ${req.get(
    'Origin'
  )}`
  );
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
}