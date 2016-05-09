import RootNode from './root'

class BucketNode extends RootNode {

  constructor(options = {}) {
    super(options)

    this.entityName = 'buckets'
    this.linkName   = 'bucket'
    this.url.slug   = 'buckets'
  }

}

export default BucketNode
