import RootNode from './root'

class TemplateRevisionNode extends RootNode {

  constructor(options = {}) {
    super(options)

    this.entityName = 'template-revisions'
    this.linkName   = 'template-revision'
    this.url.slug   = 'template-revisions'
  }

}

export default TemplateRevisionNode
