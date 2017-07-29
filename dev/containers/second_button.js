import React, { Component } from 'react';
import {createSession} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class NewButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      create: false
    }

    this.openEmptySession = (event) => {
      console.log('state:', this.state);
      this.setState({create: true });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.openEmptySession} className="addButton btn btn-default">+</button>
      </div>
    )
  }
}


export default NewButton;
