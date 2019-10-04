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

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';

const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path='/' component={Home} />            
            <PrivateRoute path='/profile' component={Profile} />
            <PrivateRoute path='/constacts' component={Contacts} />
            <Route path='/login' component={Login} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
