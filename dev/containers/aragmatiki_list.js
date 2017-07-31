import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSession, addSession } from '../actions/index';
import { bindActionCreators } from 'redux';

class Aragmatikes extends Component {
  renderList() {
    return this.props.sessions.aragmatikes.map((aragmatiki) => {
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
  return {
    sessions: state.addSession
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({selectSession: selectSession, sessions: addSession}, dispatch);
// }

function mapDispatchToProps(dispatch) {
  return {
    selectSession: (session) => {
      dispatch({
        type: 'SESSION_SELECTED',
        payload: {
          aragmatiki: session,
          newSession: false
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Aragmatikes);
