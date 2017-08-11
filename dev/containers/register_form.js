import React, { Component } from 'react';
import axios from 'axios';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      confPwd: ''
    }

    this.handleSubmit = (ev) => {
      ev.preventDefault();
      console.log('state on submit:', this.state);
      if (this.state.password !== this.state.confPwd) {
        console.error("Passwords don't match");
      } else {
        axios.post('/', {
            username: this.state.username,
            password: this.state.password
        })
        .then((response) => {
          console.log('response:', response);
        })
        .catch((error) => {
          console.log('error:', error)
        })
        this.setState({username: ''});
        this.setState({password: ''});
        this.setState({confPwd: ''});
      }
    }
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-6" id="register_form">
        <h1 id="register">Register here</h1>
        <form className="form-horizontal" onSubmit={this.handleSubmit} action='/'>
          <div className="form-group">
            <label htmlFor="username" className="sr-only">Email address:</label>
            <input type="Username" value={this.state.username}
              required
              onChange = {(ev) => this.setState({username: ev.target.value})}
              className="form-control" id="email" placeholder="Username"/>
          </div>
          <div className="form-group">
            <label htmlFor="pwd" className="sr-only">Password:</label>
            <input type="password" value={this.state.password}
              required
              onChange = {(ev) => this.setState({password: ev.target.value})}
              className="form-control" id="pwd" placeholder="Password"/>
          </div>
          <div>
            <label htmlFor="confPwd" className="sr-only">Confirm password:</label>
            <input type="password" value={this.state.confPwd}
              required
              onChange = {(ev) => this.setState({confPwd: ev.target.value})}
              className="form-control" id="confPwd" placeholder="Confirm password"/>
          </div>
          <button type="submit" className="btn btn-default submit-button">Create account</button>
        </form>
      </div>
    )
  }
}

export default RegisterForm;
