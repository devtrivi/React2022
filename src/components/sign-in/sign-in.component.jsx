import React from 'react'
import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',

      passwords: '',
    }
  }
  handleSubmit = async e => {
    e.preventDefault()
    const { email, password } = this.state
    try {
      await auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.log(error)
    }
    this.setState({ email: '', password: '' })
  }
  handleChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className='sign-in'>
        <h2>YA TENGO CUENTA</h2>
        <span>Ingrese con su email y password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            label='email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <label>Email</label>
          <FormInput
            type='password'
            name='password'
            label='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <label>Password</label>
          <CustomButton type='submit'>Ingresar</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            {' '}
            Ingresar con Google{' '}
          </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn
