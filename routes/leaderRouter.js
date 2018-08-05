const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router()

leaderRouter.use(bodyParser.json())

leaderRouter.route('/').all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    console.log(res.header)
    res.end('We will send you all the leaders list')
  })
  .post((req, res, next) => {
    res.end(`We will add ${req.body.name} to the leaders list with description: ${req.body.description}`)
  })
  .put((req, res, next) => {
    res.statusCode = 403
    res.end(`PUT operation is not supported in the leaders list`)
  })
  .delete((req, res, next) => {
    res.end(`All leaders are deleted`)
  });


leaderRouter.route('/:leaderId').all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end(`We will send all the details of leader: ${req.params.leaderId} to you`)
  })
  .post((req, res, next) => {
    res.statusCode = 403
    res.end(`POST operation is not supported on ${req.params.leaderId}`)
  })
  .put((req, res, next) => {
    res.write('Updating the leaders list: ' + req.params.leaderId + '\n');
    res.end(`We will update the leader ${req.body.name} with details ${req.body.description}`)
  })
  .delete((req, res, next) => {
    res.end(`Deleting leader: ${req.params.leaderId}`)
  })

module.exports = leaderRouter;