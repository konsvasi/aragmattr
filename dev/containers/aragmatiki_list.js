import React, { Component } from 'react';
import { connect } from 'react-redux';

class Aragmatikes extends Component {
  renderList() {
    return this.props.aragmatikes.map((aragmatiki) => {
      return (
          <li className="list-group-item"
            key={aragmatiki.id}
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
  return ({
    selectSession: (id) => {dispatch({type: 'SESSION_SELECTED', payload: {id: id}})}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Aragmatikes);
