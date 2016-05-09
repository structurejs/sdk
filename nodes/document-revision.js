import RootNode from './root'

class DocumentRevisionNode extends RootNode {

  constructor(options = {}) {
    super(options)

    this.entityName = 'document-revisions'
    this.linkName   = 'document-revision'
    this.url.slug   = 'document-revisions'
  }

}

export default DocumentRevisionNode
