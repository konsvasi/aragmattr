import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory} from 'react-router';
import MainBar from './components/main_bar';

let mainBar = document.getElementById('main-bar');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MainBar}/>
  </Router>,
  mainBar
);
