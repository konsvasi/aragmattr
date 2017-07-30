import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import MainBar from './components/main_bar';
import Container from './components/container';
import rootReducer from './reducers';
import initialState from './reducers/initialState';
import configureStore from './store/configureStore';


let mainBar = document.getElementById('main-bar');
let container = document.getElementById('container');

// const store = configureStore();
console.log('rootReducer', rootReducer);

const store = createStore(rootReducer, initialState);

console.log('store:', store.getState());
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Container}/>
    </Router>
  </Provider>,
  container
);
