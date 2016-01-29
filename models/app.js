import Model from './base'

class AppModel extends Model {

  constructor(options = {}) {
    super(options)

    this.url.slug = 'apps'
  }

}

export default AppModel
