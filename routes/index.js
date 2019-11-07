const router = require('koa-router')()

const user = require('./users')
const info = require('./info')
const infos = require('./infos')
const disease = require('./disease')

router.use('/api', user.routes())
router.use('/api', info.routes())
router.use('/api', infos.routes(), infos.allowedMethods())
router.use('/api', disease.routes(), disease.allowedMethods())

module.exports = router
