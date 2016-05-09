import RootNode from './root'

class AppNode extends RootNode {

  constructor(options = {}) {
    super(options)

    this.entityName = 'apps'
    this.linkName   = 'app'
    this.url.slug   = 'apps'
  }

}

export default AppNode
