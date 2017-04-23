import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import MainBar from './components/main_bar';
import Container from './components/container';
import reducers from './reducers/index';

let mainBar = document.getElementById('main-bar');
let container = document.getElementById('container');

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const createStoreWithMiddleware = applyMiddleware()(createStore);
const createStoreWithMiddleware = createStore(reducers, composeEnhancers(applyMiddleware()));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <Router history={hashHistory}>
      <Route path="/" component={Container}/>
    </Router>
  </Provider>,
  container
);
