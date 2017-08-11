import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory} from 'react-router';
import { Provider } from 'react-redux';

import MainBar from './components/main_bar';
import Container from './components/container';
import configureStore from './store/configureStore';
import LoginPage from './components/login';

let mainBar = document.getElementById('main-bar');
let container = document.getElementById('container');

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={LoginPage}/>
    </Router>
  </Provider>,
  container
);
