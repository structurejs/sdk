require('babel-core/register')({
  ignore: /node_modules\/(?!structure*)/
})

global.expect = require('chai').expect
