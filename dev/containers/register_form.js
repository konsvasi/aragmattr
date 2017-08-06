import React, { Component } from 'react';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-6" id="register_form">
        <h1 id="register">Register here</h1>
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="username" className="sr-only">Email address:</label>
            <input type="Username" className="form-control" id="email" placeholder="Username"/>
          </div>
          <div className="form-group">
            <label htmlFor="pwd" className="sr-only">Password:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-default submit-button">Create account</button>
        </form>
      </div>
    )
  }
}

export default RegisterForm;
