import request from 'superagent'

class BaseModel {

  constructor() {
    this.create = this.put
    this.update = this.post
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
    //console.error('Request URL', url)
    request[type](url)
      .send(pkg)
      .set('Accept', 'application/json')
      .end( (err, res) => {

        if(err || !res.body || !res.body.pkg) {
          console.error('Request Error', err)
          return cb(err)
        }

        return cb(null, res.body.pkg, res.body.status)

      })

  }

}

BaseModel.prototype.url = {
  base: '/api/v0.1',
  host: 'http://localhost:8400',
  slug: 'base'
}

export default BaseModel
