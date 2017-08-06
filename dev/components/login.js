import React, {Component} from 'react';
import LoginForm from './loginForm';
import Logo from './logo';
import RegisterForm from '../containers/register_form';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('props in login.js', this.props);
    return (
      <div className="container-fluid">
        <div className="row" id="login-bar">
          <Logo />
          <LoginForm />
        </div>
        <div id="bg" className="fullscreen-bg overlay">
          <video loop muted autoPlay className="fullscreen-bg-video">
            <source src="./assets/videos/tokyo_background.mp4" type="video/mp4"/>
          </video>
        </div>
        <RegisterForm />
      </div>
    )
  }
}

export default Login;
