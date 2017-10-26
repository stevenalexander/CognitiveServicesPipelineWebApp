const Koa = require('koa')
const app = module.exports = new Koa()

app.use(async ctx => {
  ctx.body = 'Hello World'
})

if (!module.parent) app.listen(process.env.PORT || 3000)
