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

  get(id, cb) {
    let url = `/${id}`
    this.request('get', url, {}, cb)
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

    url = `${this.url.host}${this.url.base}/${this.url.slug}${url}`

    request[type](url)
      .send(pkg)
      .set('Accept', 'application/json')
      .end( (err, res) => {

        if(err || !res.body) {
          console.error('Request URL', url)
          console.error('Request Error', err)
          return cb(err)
        }

        var resp = this.stripPkg ? res.body.pkg : res.body

        // TODO: this should be middleware
        if(this.model) this.model.attr = res.body.pkg

        return cb(null, resp, res.body.status)

      })

  }

}

export default BaseModel
