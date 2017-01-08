import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory} from 'react-router';

let mainBar = document.getElementById('main-bar');
let container = document.getElementById('container');

var Logo = React.createClass({
  render: function() {
    let logoStyle = {
      fontFamily: "Helvetica",
      fontSize: 48,
      fontWeight: "bold",
      color: "#FFFFFF",
      padding: 13,
      paddingTop: 20,
      opacity: "0.87",
      margin: 0
    };
    return (<p style={logoStyle}>Aragmattr</p>);
  }
});

var MainBar = React.createClass({
  render: function() {
    let mainBarStyle = {
      height: 100,
      width: '100%',
      padding: 0,
      backgroundColor: "#3F51B5",
      WebkitFilter: "drop-shadow(0px 0px 5px #666)",
      filter: "drop-shadow(0px 0px 5px #666)"
    };

    return (
      <div style={mainBarStyle}>
        <Logo/>
      </div>
    );
  }
});

var Test = React.createClass({
  render: function() {
    return (
      <h1>Test route</h1>
    );
  }
});

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MainBar}/>
    <Route path="/test" component={Test}/>
  </Router>,
  mainBar
);
