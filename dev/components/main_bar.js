import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from './logo';
import Button from '../containers/add_button';
import { logout } from '../actions/AuthActions';

class MainBar extends Component {
  constructor(props) {
    super(props);

    this.logout = (e) => {
      e.preventDefault();
      this.props.logout().then(
        (res) => this.context.router.push('/'),
        (err) => console.log('Error', err)
      );
    }
  }

  showLogout() {
    if (this.props.isAuthenticated) {
      return (
        <div>
          <button onClick= {this.logout} className="btn btn-default">Logout</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="main-bar row">
        <Logo/>
        <Button/>
        { this.showLogout() }
      </div>
    );
  }

}

MainBar.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
  logout: React.PropTypes.func.isRequired
}

MainBar.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, {logout})(MainBar);
