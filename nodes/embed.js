import request  from 'superagent'
import RootNode from './root'

class EmbedNode extends RootNode {

  constructor(options = {}) {
    super(options)

    this.entityName = 'digital-assets'
    this.linkName   = 'digital-asset'
    this.url.slug   = 'digital-assets'
  }

  fetchTwitter(url) {
    return new Promise( (resolve, reject) => {

      request
        .get(url)
        .end( (err, res) => {
          console.log('res', res)

          if(err) {
            return reject(err)
          }

          resolve(res)
        })

    })
  }

}

export default EmbedNode
