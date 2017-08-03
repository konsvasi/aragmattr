import React, { Component } from 'react';
import { connect } from 'react-redux';

class Aragmatikes extends Component {
  renderList() {
    return this.props.aragmatikes.map((aragmatiki) => {
      return (
          <li className="list-group-item"
            key={aragmatiki.name}
            onClick ={()=> {this.props.selectSession(aragmatiki)}}>
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
    aragmatikes: state.addSession.aragmatikes
  };
}

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
