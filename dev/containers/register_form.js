import React, { Component } from 'react';
import axios from 'axios';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.handleNameChange = (ev) => {
      this.setState({username: ev.target.value});
    }

    this.handlePasswordChange = (ev) => {
      this.setState({password: ev.target.value});
    }

    this.handleSubmit = (ev) => {
      ev.preventDefault();
      //this.props.handleSubmit(this.state.name, this.state.location);
      // fetch('/', {
      //   method: 'POST',
      //   body: {
      //     username: this.state.username,
      //     password: this.state.password
      //   }
      // })
      // .then(function(response){
      //   return response.json()
      // }).then(function(body) {
      //   console.log('body:', body);
      // })
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
              onChange={this.handleNameChange}
              className="form-control" id="email" placeholder="Username"/>
          </div>
          <div className="form-group">
            <label htmlFor="pwd" className="sr-only">Password:</label>
            <input type="password" value={this.state.password}
              onChange={this.handlePasswordChange}
              className="form-control" id="pwd" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-default submit-button">Create account</button>
        </form>
      </div>
    )
  }
}

export default RegisterForm;
