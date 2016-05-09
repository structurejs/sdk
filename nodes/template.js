import RootNode from './root'

class TemplateNode extends RootNode {

  constructor(options = {}) {
    super(options)

    this.entityName = 'templates'
    this.linkName   = 'template'
    this.url.slug   = 'templates'
  }

}

export default TemplateNode
