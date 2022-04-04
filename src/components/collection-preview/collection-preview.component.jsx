import styled from 'styled-components'
/* because it is a preview we omit items w key >4 */
/* REACT NOTE: every time this comp is rerendered the array is filtered and map. if the array grows enough it will cause performance issues. */
import CollectionItem from '../collection-item/collection-item.component'

const Wrapper = styled.div`
  .collection-preview {
    .title {
    }

    .preview {
    }
  }
`

const CollectionPreview = ({ title, items }) => (
  <Wrapper
    className='collection-preview'
    style={{
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '30px',
    }}
  >- Collection preview
    <h1
      className='title'
      style={{
        fontSize: '28px',
        marginBottom: '25px',
      }}
    >
      {title.toUpperCase()}
    </h1>
    <div
      className='preview'
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </Wrapper>
)
export default CollectionPreview
