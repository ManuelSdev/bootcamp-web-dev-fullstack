import React from 'react';
import T from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage, PrivateRoute } from './components/auth';
import { TweetsPage, NewTweetPage, TweetDetailPage } from './components/tweets';
import { AuthContextProvider } from './components/auth/context';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);
  const ref = React.useRef(null);

  React.useEffect(() => {
    console.log(ref.current);
  }, []);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => setIsLogged(false);

  const authValue = {
    isLogged,
    onLogout: handleLogout,
    onLogin: handleLogin,
  };

  return (
    <div className="App">
      <AuthContextProvider value={authValue}>
        <Switch>
          <Route path="/tweet/:tweetId">
            {routeProps => <TweetDetailPage ref={ref} {...routeProps} />}
          </Route>
          <PrivateRoute path="/tweet">
            <NewTweetPage />
          </PrivateRoute>
          <Route path="/login" component={LoginPage} />
          <Route exact path="/">
            <TweetsPage />
          </Route>
          <Route path="/404">
            <div
              style={{
                textAlign: 'center',
                fontSize: 48,
                fontWeight: 'bold',
              }}
            >
              404 | Not found page
            </div>
          </Route>
          <Route>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

App.propTypes = {
  isInitiallyLogged: T.bool.isRequired,
};

export default App;
