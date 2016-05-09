import RootNode from './root'

class DigitalAssetNode extends RootNode {

  constructor(options = {}) {
    super(options)

    this.entityName = 'digital-assets'
    this.linkName   = 'digital-asset'
    this.url.slug   = 'digital-assets'
  }

}

export default DigitalAssetNode
