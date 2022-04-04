import React from 'react'
import {useParams} from 'react-router-dom'
import Z from '../../components/z/z.component'
import { connect } from 'react-redux'
import CollectionItem from '../../components/collection-item/collection-item.component'
import { selectCollection } from '../../redux/shop/shop.selector'

function CollectionPage({ collection }) {
  const params = useParams()
  console.log('collection, ',collection)
  return (
    <Z className='collection-page'>
      <h2 className='title'>title</h2>
      <Z className='items'>
        map goes here
      </Z>
    </Z>
  )
}
const mapStateToProps = (state, params) => ({
  collection: selectCollection(params.collectionId)(state),
})
export default connect(mapStateToProps)(CollectionPage)

 