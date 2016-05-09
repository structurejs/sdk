import RootNode from './root'

class OrganizationNode extends RootNode {

  constructor(options = {}) {
    super(options)

    this.entityName = 'orgs'
    this.linkName   = 'org'
    this.url.slug   = 'orgs'
  }

}

export default OrganizationNode
