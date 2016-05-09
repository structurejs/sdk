import RootNode from './root'

class FieldNode extends RootNode {

  constructor(options = {}) {
    super(options)

    this.entityName = 'fields'
    this.linkName   = 'field'
    this.url.slug   = 'fields'
  }

}

export default FieldNode
