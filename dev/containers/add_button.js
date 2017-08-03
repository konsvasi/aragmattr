import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Modal from 'react-modal';
import * as sessionAction from '../actions/index';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className="addButton btn btn-default"
          onClick={()=> {this.props.createSession()}}>+</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    createSession: () => {dispatch({type:'ADD_SESSION', payload: {newSession: true}})}
  })
}

export default connect(undefined, mapDispatchToProps)(Button);
