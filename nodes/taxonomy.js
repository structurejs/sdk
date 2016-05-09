import RootNode from './root'

class TaxonomyNode extends RootNode {

  constructor(options = {}) {
    super(options)

    this.entityName = 'taxonomies'
    this.linkName   = 'taxonomy'
    this.url.slug   = 'taxonomies'
  }

}

export default TaxonomyNode
