import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthContext from '../context';

const PrivateRoute = props => {
  const { isLogged } = React.useContext(AuthContext);
  return isLogged ? (
    <Route {...props} />
  ) : (
    <Route>

      {({ location }) => (
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
      )}

    </Route>
  );
};

export default PrivateRoute;

