import Model from './base'

class UserModel extends Model {

  constructor(options = {}) {
    super(options)

    this.url.slug = 'users'
  }

}

export default UserModel
