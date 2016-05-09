import RootNode from './root'

class DocumentNode extends RootNode {

  constructor(options = {}) {
    super(options)

    this.entityName = 'documents'
    this.linkName   = 'document'
    this.url.slug   = 'documents'
  }

}

export default DocumentNode
