'use strict'

const koa = require('koa')
const logger = require('koa-logger')
const route = require('koa-route')
const fs = require('fs')
const staticCache = require('koa-static-cache')
const mount = require('koa-mount')
const app = new koa()

const backendPort = 3000
let deploy = 'examples'

app.use(logger())

app.use(mount('/', staticCache(__dirname)))

app.use(route.get('*', function* () {
  this.type = 'html'
  this.body = yield function (done) {
    fs.readFile(`${deploy}/build/index.html`, 'utf8', done)
  }
}))

app.listen(backendPort, function () {
  /* eslint-disable no-console */
  console.log(`Backend Koa Server Listen At: ${backendPort}`)
  /* eslint-enable no-console */
})
