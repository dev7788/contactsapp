import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import { Contacts } from "./Contacts";
import { PrivateRoute } from "./PrivateRoute";
import Header from "./Header";
import { store } from '../helpers/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-table/react-table.css';
import '../styles.css';

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
            <PrivateRoute exact path='/' component={Home} />            
            <PrivateRoute path='/profile' component={Profile} />
            <PrivateRoute path='/contacts' component={Contacts} />
            <Route path='/login' component={Login} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
