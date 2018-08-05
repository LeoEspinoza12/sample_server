const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router()

promoRouter.use(bodyParser.json())

promoRouter.route('/').all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    console.log(res.header)
    res.end('We will send all the promotions to you')
  })
  .post((req, res, next) => {
    res.end(`We will add the promotion: ${req.body.name} with description ${req.body.description}`)
  })
  .put((req, res, next) => {
    res.statusCode = 403
    res.end(`PUT operation is not supported in this promotion`)
  })
  .delete((req, res, next) => {
    res.end(`All promotions are deleted`)
  });


promoRouter.route('/:promoId').all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end(`We will send all the details of promotion: ${req.params.promoId} to you`)
  })
  .post((req, res, next) => {
    res.statusCode = 403
    res.end(`POST operation is not supported on ${req.params.promoId}`)
  })
  .put((req, res, next) => {
    res.write('Updating the promotion: ' + req.params.promoId + '\n');
    res.end(`We will update the promotion ${req.body.name} with details ${req.body.description}`)
  })
  .delete((req, res, next) => {
    res.end(`Deleting promotion: ${req.params.promoId}`)
  })

module.exports = promoRouter;