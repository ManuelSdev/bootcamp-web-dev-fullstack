
import React from 'react';
import logo from './logo.svg';
import './App.css';
import AdsPage from './components/ads/AdsPage/AdsPage';
import LoginForm from './components/auth/LoginPage/LoginForm';
import LoginPage from './components/auth/LoginPage/LoginPage';
import PrivateRoute from './components/auth/PrivateRoute/PrivateRoute';
import { AuthContextProvider } from './components/auth/context';
import NewAdForm from './components/ads/newAdPage/NewAdForm';
import NewAdPage from './components/ads/newAdPage/NewAdPage';
import { Switch, Route, Redirect } from 'react-router-dom';

function App({ isInitiallyLogged }) {
  //const isInitiallyLogged = false;
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  const authValue = {
    isLogged,
    onLogout: handleLogout,
    onLogin: handleLogin,
  };

  console.log(isLogged)
  return (

    <div className="App">

      <AuthContextProvider value={authValue}>
        {/*<AdsPage />*/}
        <Switch>
          <Route path="/login" component={LoginPage}>

          </Route>
          <PrivateRoute path="/adverts/new">
            <NewAdPage />
          </PrivateRoute>
          <PrivateRoute path="/adverts">
            <AdsPage />
          </PrivateRoute>

          <PrivateRoute exact path="/">
            <Redirect to="/adverts" />
          </PrivateRoute>

        </Switch>
        {/**
         *      
            <LoginPage></LoginPage>
        {isLogged ? <AdsPage />

          : <div>hola</div>

        }
        <NewAdPage />
         */}

      </AuthContextProvider>
    </div>
  );
}

export default App;
