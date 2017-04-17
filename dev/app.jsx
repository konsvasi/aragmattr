import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import MainBar from './components/main_bar';
import Container from './components/container';
import reducers from './reducers';

let mainBar = document.getElementById('main-bar');
let container = document.getElementById('container');

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory}>
      <Route path="/" component={Container}/>
    </Router>
  </Provider>,
  container
);
