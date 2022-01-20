import React from 'react'
import styled from 'styled-components';
const Wrapper = styled.div`
.collection-item {
  

  .image {
   
  }

  .collection-footer {
    

    .name {
      width: 90%;
      margin-bottom: 15px;
    }

    .price {
      width: 10%;
    }
  }
}
`

function CollectionItem({ id, name, price, imageUrl }) {
  return (
    <Wrapper className="collection-item" style={{
      width: '22%',
      display: 'flex',
      flexDirection: 'column',
      height: '350px',
      alignItems: 'center'
    }}>
      <div className="image"
        style={{
          backgroundImage: `url(${imageUrl})`, width: '100%',
          height: '95%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginBottom: '5px'
        }} />
      <div className="collection-footer" style={{
        width: '100%',
        height: '5%',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '18px'
      }}>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

    </Wrapper>
  )
}

export default CollectionItem
