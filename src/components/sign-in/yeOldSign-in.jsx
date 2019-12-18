import React, { useState } from 'react';
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './Sign-in.styles';
import FormInput from '../form-input/Form-input';

const SignIn = props => {
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = e => {
    e.preventDefault();

    setState({ email: '', password: '' });
  };

  const handleChange = e => {
    const { value, name } = e.target;

    setState({ [name]: value });
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={state.email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={state.password}
          handleChange={handleChange}
          label='password'
          required
        />

        <input type='submit' value='Submit Form' />
      </form>
    </SignInContainer>
  );
};

export default SignIn;
