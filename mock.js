'use strict'

const koa = require('koa')
const logger = require('koa-logger')
const route = require('koa-route')
const fs = require('fs')
const staticCache = require('koa-static-cache')
const mount = require('koa-mount')
const Koa = require('koa')
const app = new Koa()

const backendPort = 3000
let deploy = 'examples'

app.use(async (ctx, next) => {
  const start = new Date
  await next()
  const ms = new Date - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(mount('/', staticCache(__dirname)))

app.listen(backendPort, function () {
  /* eslint-disable no-console */
  console.log(`Backend Koa Server Listen At: ${backendPort}`)
  /* eslint-enable no-console */
})
