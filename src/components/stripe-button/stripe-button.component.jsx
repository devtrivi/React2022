import StripeCheckout from 'react-stripe-checkout'
import React from 'react'
//price is in cents

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51KkCFTJhk4xTDEMdm2FOocYrZaGg784GcJEAelG8lOQHjTrx2IviRrNZTwu1Y5kxZZcUZaSo8KACt9fgqArsikf400TgLgCVQY'
  const onToken = token => {
    console.log('token => ', token)
    alert('payment succesfull')
  }
  //well thats a lot of boilerplate
  return (
    <StripeCheckout
      label='Pay Now'
      name='Zenga Utilities Store'
      billingAddress
      shippingAddress
      image='dgtstore/src/logo.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel={'Pay Now'}
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
