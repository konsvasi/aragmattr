import React, {Component} from 'react';
import MainBar from './main_bar';
import Logo from './logo';
import LoginForm from './loginForm';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('props in login.js', this.props);
    return (
      <div>
        <MainBar route= {this.props.route}/>
        <h2>Welcome to Aragmattr</h2>
      </div>
    )
  }
}

export default Login;
