import React from 'react'
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'
import styled from 'styled-components'
import { addItem } from '../../redux/cart/cart.actions'
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

function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item
  return (
    <Wrapper
      className='collection-item'
      style={{
        width: '22%',
        display: 'flex',
        flexDirection: 'column',
        height: '350px',
        alignItems: 'center',
      }}
    >
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
          width: '100%',
          height: '95%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginBottom: '5px',
        }}
      />
      <div
        className='collection-footer'
        style={{
          width: '100%',
          height: '5%',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '18px',
        }}
      >
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)}>Add to Cart</CustomButton>
    </Wrapper>
  )
}
//const mapStateToProps = (state) => ({})

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem)
