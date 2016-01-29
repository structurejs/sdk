import Model from './base'

class OrganizationModel extends Model {

  constructor(options = {}) {
    super(options)

    this.url.slug = 'organizations'
  }

}

export default OrganizationModel
