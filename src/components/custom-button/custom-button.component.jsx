import React from 'react'

const CustomButton = ({
  children,
  inverted,
  isGoogleSignIn,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''}${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}
    style={{
      minWidth: '165px',
      width: 'auto',
      height: '50px',
      letterSpacing: '0.5px',
      lineHeight: '50px',
      padding: '0 35px 0 35px',
      fontSize: '15px',
      backgroundColor: 'black',
      color: 'white',
      textTransform: 'uppercase',
      fontFamily: "'Open Sans Condensed'",
      fontWeight: 'bolder',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    {children}
  </button>
)
export default CustomButton
