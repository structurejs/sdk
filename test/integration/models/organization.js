import Organization            from '../../../models/organization'
import {OrganizationGenerator} from 'structure-test-helpers'

describe.only('Integration: Model: Organization', function() {

  it('should create a organization', function(done) {

    var organization = new Organization()
    var pkg      = new OrganizationGenerator()

    organization.create(pkg, function(err, res) {
      console.error('RES', res)

      expect(res.id).to.be.a('string')
      expect(res.sid).to.be.a('string')

      done()

    })

  })

  it('should get a organization by short id', function(done) {

    var organization = new Organization()
    var pkg  = new OrganizationGenerator()

    organization.create(pkg, function(err, res) {

      organization.get(res.sid, function(err2, res2) {

        expect(res.id).to.equal(res2.id)

        done()

      })

    })

  })

  it('should update a organization by short id', function(done) {

    var organization = new Organization()
    var pkg  = new OrganizationGenerator()

    var pkg2 = {
      title: 'TT2'
    }

    organization.create(pkg, function(err, res) {

      organization.update(res.sid, pkg2, function(err2, res2) {

        expect(res2.title).to.equal('TT2')

        done()

      })

    })

  })

  it('should get a list of organizations', function(done) {

    var organization = new Organization()
    var pkg  = new OrganizationGenerator()

    organization.create(pkg, function(err, res) {

      organization.list(10, function(err2, res2) {
        console.error(res2)
        expect(res2).to.be.an('array')

        done()

      })

    })

  })

})
