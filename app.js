const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
// const cors = require("cors");
const cors = require('koa-cors')
const index = require('./routes/index')
app.use(cors())
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
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
// app.use(users.routes(), users.allowedMethods())
// app.use(cors({
//   origin: ['http://localhost:8080'],
// 　　methods: ["GET", "POST"],
// 　　alloweHeaders: ["Content-Type", "application/json;charset=utf-8;application/x-www-form-urlencoded"]
// }));

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
