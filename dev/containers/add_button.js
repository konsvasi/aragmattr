import React, { Component } from 'react';
import {createSession} from '../actions/index';
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createSession: sessionAction.createSession}, dispatch);
}

function mapStateToProps(state) {
  return {
    name: state.name,
    location: state.location
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);
