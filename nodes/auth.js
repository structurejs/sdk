import RootNode from './root'

class AuthNode extends RootNode {

  constructor(options = {}) {
    super(options)

    this.entityName = 'auth'
    this.linkName   = 'auth'
    this.url.slug   = 'auth'
  }

  login(pkg) {
    return this.request('post', '/login', pkg)
  }

}

export default AuthNode
