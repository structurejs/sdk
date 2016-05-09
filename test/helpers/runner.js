require('babel-core/register')({
  ignore: /node_modules\/(?!structure*)/
})
require('babel-polyfill')

process.env.NODE_ENV = 'test'
