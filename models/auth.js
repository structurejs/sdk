import Model from './base'

class AuthModel extends Model {

  constructor(options = {}) {
    super(options)

    this.url.slug = 'auth'
  }

  login(pkg, cb) {
    this.request('post', '/login', pkg, cb)
  }

}

export default AuthModel
