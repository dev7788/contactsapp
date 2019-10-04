import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from "./Home";

import configureStore from "../configureStore";
import Login from "./Login";
import Profile from "./Profile";
import Contacts from "./Contacts";
import { PrivateRoute } from "./PrivateRoute";

const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path='/' render={() => (<Home />)} />            
            <PrivateRoute path='/profile' render={() => (<Profile />)} />
            <PrivateRoute path='/constacts' render={() => (<Contacts />)} />
            <Route path='/login' render={() => (<Login />)} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
