import { createRequire } from 'node:module'

// @ts-expect-error
const { default: x } = await import('./mod.cts')
const { default: y } = await import('./mod.mts')
console.info(x, y)

const require = createRequire(import.meta.url)
const xx = require('./mod.cts')
const { default: yy } = require('./mod.mts')
console.info(xx, yy)

export {}
