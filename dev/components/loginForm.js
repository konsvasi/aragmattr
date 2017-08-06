import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const LoginForm = () => {
  return (
    <div className="col-md-6">
      <form className="form-inline">
        <label className="sr-only" htmlFor="inlineFormInput">Name</label>
        <input type="text" className="form-control input-style" placeholder="Username" />

        <label className="sr-only" htmlFor="inlineFormInput">Name</label>
        <input type="password" className="form-control input-style" placeholder="Password" />
        <button type="submit" className="btn btn-default submit-button">Login</button>
      </form>
    </div>
  )
}
export default LoginForm;
