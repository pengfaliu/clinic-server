const router = require('koa-router')()
const report_controllers = require('../controllers/report_controllers')

router
  .post('/report', report_controllers.report_script_info)

module.exports = router