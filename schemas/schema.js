import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import singletonHome from './singletonHome'
import collection from './collection'
import clients from './clients'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    collection,
    clients,    
    singletonHome
  ]),
})
