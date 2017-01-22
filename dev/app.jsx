import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory} from 'react-router';
import MainBar from './components/main_bar';
import Container from './components/container';

let mainBar = document.getElementById('main-bar');
let container = document.getElementById('container');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Container}/>
  </Router>,
  container
);
