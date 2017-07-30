import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSession, createSession } from '../actions/index';
import { bindActionCreators } from 'redux';

class Aragmatikes extends Component {
  renderList() {
    console.log('this.props2', this);
    // return this.props.sessions.aragmatikes.map((aragmatiki) => {
    return [].map(aragmatiki => {
      return (
          <li className="list-group-item"
            key={aragmatiki.name}
            onClick ={()=>this.props.selectSession(aragmatiki)}>
            {aragmatiki.name}
          </li>
      )
    })
  }

  render() {
    return(
      <ol className="aragmatikes">
        {this.renderList()}
      </ol>
    )
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return {
    sessions: state.createSession
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectSession: selectSession, sessions: createSession}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Aragmatikes);
