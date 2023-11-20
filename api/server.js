const express = require('express');
const middlewares = require('./middleware/middleware.js')


const server = express();

server.use(express.json())


// global middlewares and the user's router need to be connected here

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});


// router.use((error, req, res, next) => {
//   res.status(error.status || 500).json({
//     message: error.message,
//     customMessage: "Something went wrong here"
//   })
// })


module.exports = server;
