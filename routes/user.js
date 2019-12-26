const router = require('koa-router')()
const user_controllers = require('../controllers/user_controllers')

router
  .post('/login', user_controllers.user_login)

module.exports = router