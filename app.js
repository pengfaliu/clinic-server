const Koa = require('koa')
const http = require('http')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const response_formatter = require('./middleware/response_formatter')
app.use(require('koa-static')(__dirname + '/public'))
// const jwt = require('jsonwebtoken')
// const jwtKoa = require('koa-jwt')
// const util = require('util')
// const verify = util.promisify(jwt.verify) // 解密
// const secret = 'jwt demo'
// const cors = require("cors");
const cors = require('koa-cors')
const index = require('./routes/index')

// const users = require('./routes/users')

// const proxy = require('koa2-proxy-middleware')
// const proxyOptions = {
//   target: 'http://127.0.0.1:3000',
//   changeOrigin: true
// }
// const exampleProxy = proxy('/api/', proxyOptions)

// app.use(exampleProxy)

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text'],
  multipart: true
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

app.use(cors())
// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// app.use(jwtKoa({secret}).unless({
//   path: [/^\/api\/login/] // 数组中的路径不需要进行jwt验证
// }))

app.use(response_formatter)

// routes
app.use(index.routes(), index.allowedMethods())
// app.use(users.routes(), users.allowedMethods())
// app.use(cors({
//   origin: ['http://localhost:8080'],
// 　　methods: ["GET", "POST"],
// 　　alloweHeaders: ["Content-Type", "application/json;charset=utf-8;application/x-www-form-urlencoded"]
// }));

const port = process.env.PORT || 9000

app.server = app.listen(port, () => {
  console.log(`server running @ http://localhost:${port}`)
})

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
