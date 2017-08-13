import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerRequest } from '../actions/RegisterActions';
import validateInput from '../utils/validateInput';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      confPwd: '',
      errors: {},
      isLoading: false
    }

    this.isValid = () => {
      const {errors, isValid} = validateInput(this.state);
      if(!isValid) {
        this.setState({errors});
      }

      return isValid;
    }

    this.handleSubmit = (ev) => {
      ev.preventDefault();
      if (this.isValid()) {
        this.setState({errors: {}, isLoading: true});
        console.log('state on submit:', this.state);
        if (this.state.password !== this.state.confPwd) {
          console.error("Passwords don't match");
        } else {
          this.props.registerRequest(this.state).then(
            (res) => {
              this.context.router.push('/aragmatikes');
            },
            (error) => {
              console.log('error', error);
              this.setState({errors: error.response.data});
            }
          );
        }
      }
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="col-md-6 col-md-offset-6" id="register_form">
        <h1 id="register">Register here</h1>
        <form className="form-horizontal" onSubmit={this.handleSubmit} action='/'>
          <div className="form-group">
            <label htmlFor="username" className="sr-only">Email address:</label>
            <input type="Username" value={this.state.username}
              onChange = {(ev) => this.setState({username: ev.target.value})}
              className="form-control" id="email" placeholder="Username"/>
            {errors.username && <span className="help-block">{errors.username}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="pwd" className="sr-only">Password:</label>
            <input type="password" value={this.state.password}
              onChange = {(ev) => this.setState({password: ev.target.value})}
              className="form-control" id="pwd" placeholder="Password"/>
            {errors.password && <span className="help-block">{errors.password}</span>}
          </div>
          <div>
            <label htmlFor="confPwd" className="sr-only">Confirm password:</label>
            <input type="password" value={this.state.confPwd}
              onChange = {(ev) => this.setState({confPwd: ev.target.value})}
              className="form-control" id="confPwd" placeholder="Confirm password"/>
            {errors.confPwd && <span className="help-block">{errors.confPwd}</span>}
          </div>
          <button type="submit" disabled={this.state.isLoading} className="btn btn-default submit-button">Create account</button>
        </form>
      </div>
    )
  }
}

RegisterForm.propTypes = {
  registerRequest: React.PropTypes.func.isRequired
}

RegisterForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(undefined, { registerRequest })(RegisterForm);
