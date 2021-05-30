const Koa = require('koa')
const Router = require('koa-router')
const KoaBody = require('koa-body')
const Cors = require('koa-cors')

const { useModules } = require('./models/modules/index')

const app = new Koa()
const cors = new Cors()
const router = new Router()

app.use(cors).use(KoaBody())

router.get('/', async cxt => {
  ctx.type = 'html'
  ctx.body = '<h1>hello world!</h1>'
})

router.post('/module', async cxt => useModules(cxt))

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => console.log('You are listening on 127.0.0.1:3000'))
