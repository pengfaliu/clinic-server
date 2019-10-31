const router = require('koa-router')()

const user = require('./users')
const info = require('./info')
const infos = require('./infos')

router.use('/api', user.routes())
router.use('/api', info.routes())
router.use('/api', infos.routes(), infos.allowedMethods())

module.exports = router
