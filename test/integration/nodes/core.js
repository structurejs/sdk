

import Nodes from '../../helpers/nodes'
import test  from 'ava'

import {
  AppGenerator,
  BucketGenerator,
  FieldGenerator,
  OrganizationGenerator,
  TaxonomyGenerator,
  TemplateGenerator,
  UserGenerator
} from 'structure-test-helpers'

var tests = {
  app: {
    Generator: AppGenerator
  },
  bucket: {
    Generator: BucketGenerator
  },
  field: {
    Generator: FieldGenerator
  },
  org: {
    Generator: OrganizationGenerator
  },
  taxonomy: {
    Generator: TaxonomyGenerator
  },
  template: {
    Generator: TemplateGenerator
  },
  user: {
    Generator: UserGenerator
  }
}

Nodes.forEach( (Node) => {
  var node = new Node()

  if(['auth'].indexOf(node.linkName) == -1) {
    tests[node.linkName].Node = Node
  }

})

Object.keys(tests).forEach( (key) => {

  test(`should create a ${key}`, async (t) => {

    var node = new tests[key].Node()
    var pkg  = new tests[key].Generator()

    var res  = await node.create(pkg)
    console.error(res)
    if(res.pkg.id && res.pkg.sid) {
      t.pass()
      return
    }

    t.fail()

  })

  test(`should update a ${key} by id`, async (t) => {

    var node = new tests[key].Node()
    var pkg  = new tests[key].Generator()

    var pkg2 = {
      foo: 'TT2'
    }

    var res  = await node.create(pkg)
    var res2 = await node.update(res.pkg.id, pkg2)

    if(res2.pkg.foo) {
      t.is(res2.pkg.foo, 'TT2')
      t.pass()
      return
    }

    t.fail()

  })

  test(`should get a ${key} by id`, async (t) => {

    var node = new tests[key].Node()
    var pkg  = new tests[key].Generator()

    var res  = await node.create(pkg)
    console.error('RES A', res)
    var res2 = await node.get(res.pkg.id)
    console.error('RES 2A', res2)
    if(res2.pkg.id) {
      t.pass()
      return
    }

    t.fail()

  })

  test(`should get a ${key} by short id`, async (t) => {

    var node = new tests[key].Node()
    var pkg  = new tests[key].Generator()

    var res  = await node.create(pkg)
    console.error('RES B', res)
    var res2 = await node.get(res.pkg.sid)
    console.error('RES 2B', res2)
    if(res2.pkg.sid) {
      t.is(res.sid, res2.sid)
      t.pass()
      return
    }

    t.fail()

  })

  test(`should get a list of ${key}`, async (t) => {

    var node = new tests[key].Node()
    var pkg  = new tests[key].Generator()

    var res  = await node.create(pkg)
    var res2 = await node.getAll()

    if(res2.pkg[`${node.entityName}`][0].id) {
      t.pass()
      return
    }

    t.fail()

  })

})
