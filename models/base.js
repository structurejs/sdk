import request from 'superagent'

class BaseModel {

  constructor(options = {}) {
    this.create   = this.put
    this.model    = options.model
    this.stripPkg = true
    this.update   = this.post
    this.url = {
      base: '/api/v0.1',
      host: 'http://localhost:8400',
      slug: 'base'
    }
  }

  delete(id, pkg = {}, cb) {
    let url = `/${id}`
    this.request('del', url, pkg, cb)
  }

  get(id, pkg = {}, cb) {
    if(arguments.length == 2) {
      id = arguments[0]
      cb = arguments[1]
    }

    let url = `/${id}`
    this.request('get', url, pkg, cb)
  }

  list(options = {}, cb) {
    var limit = null
    options   = options || {}

    if(arguments.length == 1) {
      limit   = null

      if(typeof arguments[0] == 'function') {
        options = {}
        cb      = arguments[0]
      }

    }

    if(options.limit) {
      limit = `/${limit}`
      delete options.limit
    } else {
      limit = ''
    }

    let url = `/list${limit}`
    this.request('get', url, options, cb)
  }

  post(id, pkg = {}, cb) {
    let url = `/${id}`
    this.request('post', url, pkg, cb)
  }

  put(pkg = {}, cb) {
    let url = ''
    this.request('put', url, pkg, cb)
  }

  request(type, url = '', pkg = {}, cb) {

    var data = 'send'
    url = `${this.url.host}${this.url.base}/${this.url.slug}${url}`

    if(type == 'get') {
      data = 'query'
    }

    request[type](url)
      [data](pkg)
      .set('Accept', 'application/json')
      .end( (err, res) => {

        if(err || !res.body) {
          console.error('Request URL', url)
          console.error('Request Error', err)
          return cb(err)
        }

        var resp = this.stripPkg ? res.body.pkg : res.body

        // TODO: this should be middleware
        if(this.model && this.model.push) {
          this.model.push(res.body.pkg)
        }

        if(typeof cb == 'function') return cb(null, resp, res.body.status)

      })

  }

}

export default BaseModel
