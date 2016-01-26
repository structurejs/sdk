import Model from './base'

class AuthModel extends Model {

  constructor() {
    super()

    this.url.slug = 'auth'
  }

  login(pkg, cb) {
    this.request('post', '/login', pkg, cb)
  }

}

export default AuthModel
