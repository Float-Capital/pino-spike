'use strict'

const pino = require('pino')
const { once } = require('events')
const ecsPinoFormat = require("@elastic/ecs-pino-format");

const ecsOptions = ecsPinoFormat();

module.exports = async function (opts = {}) {
  console.log("in my custom pino file")
  const destOpts = Object.assign({}, opts, { dest: opts.destination || 1, sync: false }, ecsOptions)
  console.log("dest options", destOpts)
  delete destOpts.destination
  const destination = pino.destination(destOpts)
  await once(destination, 'ready')
  return destination
}
