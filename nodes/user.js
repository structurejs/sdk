import RootNode from './root'

class UserNode extends RootNode {

  constructor(options = {}) {
    super(options)

    this.entityName = 'users'
    this.linkName   = 'user'
    this.url.slug   = 'users'
  }

}

export default UserNode
