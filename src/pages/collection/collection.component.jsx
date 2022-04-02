import React from 'react'
import Z from '../../components/z/z.component'
import { connect } from 'react-redux'
import CollectionItem from '../../components/collection-item/collection-item.component'
import { selectCollection } from '../../redux/shop/shop.selector'
function CollectionPage({ collection }) {
  const { title, items } = collection
  return (
    <Z className='collection-page'>
      <h2 className='title'>{title}</h2>
      <Z className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Z>
    </Z>
  )
}
const mapStateToPropsm = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
})
export default CollectionPage
