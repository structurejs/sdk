import Model from './base'

class UserModel extends Model {

  constructor() {
    super()

    this.url.slug = 'users'
  }

}

export default UserModel
