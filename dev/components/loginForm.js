import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/AuthActions';
import axios from 'axios';
import { Link } from 'react-router';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: {}
    }

    this.handleSubmit = (ev) => {
      ev.preventDefault();
      this.props.login(this.state).then(
        (res) => this.context.router.push('/aragmatikes'),
        (err) => {
          this.setState({errors: err.response.data.errors })}
      );

      this.setState({username: ''});
      this.setState({password: ''});
    }
  }

  render() {
    return (
      <div className="col-md-6">
        <form  onSubmit={this.handleSubmit} className="form-inline">
          { this.state.errors.form && <div className="alert alert-danger">{this.state.errors.form}</div>}
          <label className="sr-only" htmlFor="inlineFormInput">Name</label>
          <input type="text"
            required
            onChange={(ev) => {this.setState({username: ev.target.value})}}
            className="form-control input-style" placeholder="Username" />
          <label className="sr-only" htmlFor="inlineFormInput">Name</label>
          <input type="password"
            required
            onChange={(ev) => {this.setState({password: ev.target.value})}}
            className="form-control input-style" placeholder="Password" />
          <button type="submit" className="btn btn-default submit-button">Login</button>
        </form>
      </div>
    )
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(undefined, { login })(LoginForm);
