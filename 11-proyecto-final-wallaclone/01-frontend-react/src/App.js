//TEST COMMIT

import logo from './logo.svg';
//import './App.css';
import React from 'react';
import LoginPage from './components/auth/LoginPage/LoginPage';
import RegisterPage from './components/auth/RegisterPage/RegisterPage';
import { Switch, Route, Redirect, Router, useHistory } from 'react-router-dom';
import Layout from './components/layout/Layout';
import UserPage from './components/userPage/UserPage';
import NewAdPage from './components/ads/newAdPage/NewAdPage'
import AdsPage from './components/ads/adsPage/AdsPage'
import { AuthProvider } from './components/auth/context';
import { logout } from "./api/user"
import AdDetailsPage from './components/ads/AdDetailsPage/AdDetailsPage';
import ChatPage from './components/chatPage/ChatPage';
import HomePage from './components/homePage/HomePage';
import NotFoundPage from './NotFoundPage';
import PrivateRoute from './components/auth/privateRouter/PrivateRoute';
import MemberPage from './components/memberPage/MemberPage';
import usePromise from './components/customHooks/usePromise';
import useForm from './components/customHooks/useForm';
import { getAds } from './api/ads';


function App({ autoLogged }) {
  //const autoLogged = false
  const history = useHistory()

  const [isLogged, setIsLogged] = React.useState(autoLogged);
  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => {
    logout()
    setIsLogged(false)
    history.push('/')
  }

  const { loading, error, throwPromise, data: ads } = usePromise([]);

  const { handleChange, handleSubmit, validate, setFormValue, formValue: filters } = useForm({
    searchKeys: "",
    maxPrice: "1000000",
    minPrice: "0",
    tags: []

  });

  const [areFiltersOn, setAreFiltersOn] = React.useState(true);
  const handleFiltersAreOn = () => setAreFiltersOn(true);
  const handleFiltersAreOff = () => setAreFiltersOn(false);

  const loginProps = { isLogged, handleLogin, handleLogout };

  const getAdProps = { loading, error, throwPromise, ads }
  const searchFormProps = { handleSubmit, setFormValue, handleChange, filters }
  const filtersProps = { areFiltersOn, handleFiltersAreOn, handleFiltersAreOff };

  const allProps = { ...loginProps, ...filtersProps, ...searchFormProps, ...getAdProps }


  // console.log(throwPromise)
  return (
    <div className="App ">
      <AuthProvider {...allProps}>
        <Switch>
          <PrivateRoute path="/user" component={UserPage}></PrivateRoute>
          <PrivateRoute exact path="/chat" component={ChatPage}></PrivateRoute>
          <PrivateRoute exact path="/ads/new" component={NewAdPage}></PrivateRoute>
          <Route exact path="/ads/:adUrl" component={AdDetailsPage}></Route>
          <Route exact path="/ads" component={AdsPage}></Route>
          <Route path="/members/:memberId" component={MemberPage}></Route>

          <Route path="/" component={AdsPage}></Route>
          {/*<Route path="/" component={AdsPage}></Route>
             <Route path="/">
              {(routeProps) => (<AdsPage adUrl={dinamicAdDetailsUrl} />)}
            </Route>*/}
          <Route exact path="/404">
            <NotFoundPage />
          </Route>
          {/*Si no matchea ninguna ruta anterior, redirect a /404*/}
          <Redirect to="/404" />
        </Switch>
      </AuthProvider>
    </div >
  );
}

export default App;

