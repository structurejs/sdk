import Template            from '../../../models/template'
import {TemplateGenerator} from 'structure-test-helpers'

describe('Integration: Model: Template', function() {

  it('should create a template', function(done) {

    var template = new Template()
    var pkg      = new TemplateGenerator()

    template.create(pkg, function(err, res) {
      console.error('RES', res)

      expect(res.id).to.be.a('string')
      expect(res.sid).to.be.a('string')

      done()

    })

  })

  it('should get a template by short id', function(done) {

    var template = new Template()
    var pkg  = new TemplateGenerator()

    template.create(pkg, function(err, res) {

      template.get(res.sid, function(err2, res2) {

        expect(res.id).to.equal(res2.id)

        done()

      })

    })

  })

  it('should update a template by short id', function(done) {

    var template = new Template()
    var pkg  = new TemplateGenerator()

    var pkg2 = {
      fields: [
        {
          title: 'Field 01',
          type: 'text-input'
        },
        {
          title: 'Field 02',
          type: 'text-input'
        },
      ]
    }

    template.create(pkg, function(err, res) {

      template.update(res.sid, pkg2, function(err2, res2) {

        expect(res2.fields[1].type).to.equal('text-input')

        done()

      })

    })

  })

})
