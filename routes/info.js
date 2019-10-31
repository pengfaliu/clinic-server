const sql = require('mssql')
const router = require('koa-router')()
const db_config = require('../config/db')

router.get('/', async (ctx, next) => {
  var res = ''
  await new sql.ConnectionPool(db_config).connect().then(pool => {
    return pool.query`select * from KLN_BAS_MedSpec where FMedSpecID = 3`
  }).then(result => {
    console.dir(result)
    res = result
  }).catch(err => {
    console.dir(err)
  })
  ctx.body = res
})
// router.get('/info', )
module.exports = router
