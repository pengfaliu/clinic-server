const router = require('koa-router')()
const disease_controllers = require('../controllers/disease_controllers')

router
  .post('/diseasetype', disease_controllers.disease_type)
  .post('/diseaselist', disease_controllers.disease_list)

module.exports = router