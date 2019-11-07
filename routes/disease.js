const router = require('koa-router')()
const disease_controllers = require('../controllers/disease_controllers')

router
  .get('/diseasetype', disease_controllers.disease_type)

module.exports = router