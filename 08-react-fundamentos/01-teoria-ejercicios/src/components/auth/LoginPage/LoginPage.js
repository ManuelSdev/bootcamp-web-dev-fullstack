import React from 'react';
import T from 'prop-types';
import LoginForm from './LoginForm';
import { login } from '../../../api/auth';

import './LoginPage.css';
import { AuthContextConsumer } from '../context';

function LoginPage({ onLogin, history, location }) {
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const isLogged = React.useRef(false);

  const resetError = () => setError(null);

  React.useEffect(() => {
    if (isLogged.current) {
      onLogin();
      const { from } = location.state || { from: { pathname: '/' } };
      // const from = location.state ? location.state.from : {pathname: '/'}

      history.replace(from);
    }
  });

  const handleSubmit = async credentials => {
    // login(credentials).then(() => onLogin());
    resetError();
    setIsLoading(true);
    try {
      await login(credentials);
      isLogged.current = true;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Log in to Twitter</h1>
      <LoginForm isLoading={isLoading} onSubmit={handleSubmit} />
      {error && (
        <div onClick={resetError} className="loginPage-error">
          {error.message}
        </div>
      )}
    </div>
  );
}

LoginPage.propTypes = {
  onLogin: T.func.isRequired,
  history: T.shape({ replace: T.func.isRequired }).isRequired,
  location: T.object.isRequired,
};

const ConnectedLoginPage = props => {
  return (
    <AuthContextConsumer>
      {value => <LoginPage {...value} {...props} />}
    </AuthContextConsumer>
  );
};

export default ConnectedLoginPage;
