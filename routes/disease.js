const router = require('koa-router')()
const disease_controllers = require('../controllers/disease_controllers')
const jwt_auth = require('../middleware/jwt_auth')

router
  .post('/diseasetype', jwt_auth, disease_controllers.disease_type)
  .post('/diseaselist', disease_controllers.disease_list)

module.exports = router