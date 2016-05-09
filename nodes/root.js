import request from 'superagent'

class RootNode {

  constructor(options = {}) {
    this.create   = this.put
    this.model    = options.model
    this.stripPkg = false
    this.update   = this.post
    this.url = {
      base: '/api/v0.1',
      host: 'http://localhost:8400',
      slug: 'root'
    }
  }

  delete(id, pkg = {}) {
    let url = `/${id}`
    return this.request('del', url, pkg)
  }

  get(id, pkg = {}) {
    let url = `/${id}`
    return this.request('get', url, pkg, true)
  }

  getAll(options = {}) {
    //var limit = null
    //options   = options || {}

    /*if(arguments.length == 1) {
      limit   = null

      if(typeof arguments[0] == 'function') {
        options = {}
      }

    }*/

    /*if(options.limit) {
      limit = `/${limit}`
      delete options.limit
    } else {
      limit = ''
    }*/

    //let url = `/list${limit}`
    let url = ''
    return this.request('get', url, options)
  }

  post(id, pkg = {}) {
    let url = `/${id}`
    return this.request('post', url, pkg)
  }

  put(pkg = {}) {
    let url = ''
    return this.request('put', url, pkg)
  }

  request(type, url = '', pkg = {}, debug) {

    return new Promise ( (resolve, reject) => {

      var data = 'send'
      url = `${this.url.host}${this.url.base}/${this.url.slug}${url}`
      if(debug) console.error('DEBUG', url)
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
            return reject(err)
          }

          var resp = this.stripPkg ? res.body.pkg : res.body
          //console.error('RESP', resp)
          // TODO: this should be middleware
          if(this.mode && this.model.push) {
            this.model.push(res.body.pkg)
          }

          return resolve(resp)

        })

    })

  }

}

export default RootNode
