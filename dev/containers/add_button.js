import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Modal from 'react-modal';
import * as sessionAction from '../actions/index';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

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


// function mapDispatchToProps(dispatch) {
//   return ({
//     createSession: () => {dispatch({type:'CREATE_SESSION', payload: {newSession: true}})}
//   })
// }

function mapDispatchToProps(dispatch) {
  return ({
    createSession: () => {dispatch({type:'ADD_SESSION', payload: {newSession: true}})}
  })
}

export default connect(undefined, mapDispatchToProps)(Button);
