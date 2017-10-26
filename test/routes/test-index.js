/* global describe beforeEach it */
var supertest = require('supertest')
var express = require('express')
var index = require('../../routes/index.js')

describe('index', function () {
  var request

  beforeEach(function () {
    var app = express()
    app.set('views', './views')
    app.set('view engine', 'pug')

    app.use('/', index)

    request = supertest(app)
  })

  describe('GET /', function () {
    it('should respond with a 200', function (done) {
      request
        .get('/')
        .expect(200)
        .end(done())
    })
  })
})
