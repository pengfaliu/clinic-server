const router = require('koa-router')()
const disease_controllers = require('../controllers/disease_controllers')
const jwt_auto = require('../middleware/jwt_auto')

router
  .post('/diseasetype', jwt_auto, disease_controllers.disease_type)
  .post('/diseaselist', disease_controllers.disease_list)

module.exports = router