import React from 'react';
import T from 'prop-types';

import Button from '../../shared/Button';
import FormField from '../../shared/FormField';
import useForm from '../../../hooks/useForm';

import './LoginForm.css';

function LoginForm({ onSubmit, isLoading }) {
  const [credentials, handleChange] = useForm({
    username: '',
    password: '',
  });

  //   const handleUsernameChange = event => {
  //     const newCredentials = { ...credentials, username: event.target.value };
  //     setCredentials(newCredentials);
  //   };

  //   const handlePasswordChange = event => {
  //     const newCredentials = { ...credentials, password: event.target.value };
  //     setCredentials(newCredentials);
  //   };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(credentials);
  };

  //   const validatePassword = () => {
  //     return /abcd/.test(credentials.password);
  //   };

  const { username, password } = credentials;

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <FormField
        type="text"
        name="username"
        label="phone, email or username"
        className="loginForm-field"
        value={username}
        // onChange={handleUsernameChange}
        onChange={handleChange}
        autofocus
      />
      <FormField
        type="password"
        name="password"
        label="password"
        className="loginForm-field"
        value={password}
        // onChange={handlePasswordChange}
        onChange={handleChange}
      />
      <Button
        type="submit"
        className="loginForm-submit"
        variant="primary"
        disabled={isLoading || !username || !password}
      >
        Log in
      </Button>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: T.func.isRequired,
  isLoading: T.bool,
};

LoginForm.defaultProps = {
  isLoading: false,
};

export default LoginForm;
