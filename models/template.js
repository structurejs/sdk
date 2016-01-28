import Model from './base'

class TemplateModel extends Model {

  constructor(options = {}) {
    super(options)

    this.url.slug = 'templates'
  }

}

export default TemplateModel
