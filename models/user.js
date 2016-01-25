import Model from './base'

class UserModel extends Model {

  constructor() {
    super()
  }

}

UserModel.prototype.url.slug = 'users'

export default UserModel
