const router = require('koa-router')()
const info_controllers = require('../controllers/info_controllers')

router
  .get('/infos', info_controllers.get_info)
  .get('/infos/:id', info_controllers.get_info_id)

module.exports = router