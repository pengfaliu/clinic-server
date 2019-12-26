const router = require('koa-router')()
const disease_controllers = require('../controllers/disease_controllers')
const jwt_disease = require('../middleware/jwt_disease')

router
  .post('/diseasetype', jwt_disease, disease_controllers.disease_type)
  .post('/diseaselist', disease_controllers.disease_list)

module.exports = router