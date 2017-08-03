import React, { Component} from 'react';
import {connect} from 'react-redux';


class AragmatikiContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.aragmatikes.length == 0) {
      return (
        <div className="aragmatikiContent">
              <h2 className="content-style">Create a session</h2>
        </div>
      )
    }

    return(
      <div className="aragmatikiContent">
        <h1 className="content-style">Name:{this.props.aragmatikes[0].name}</h1>
        <h2 className="content-style">Location:{this.props.aragmatikes[0].location}</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    aragmatiki: state.activeSession,
    aragmatikes: state.addSession.aragmatikes
  }
}

export default connect(mapStateToProps)(AragmatikiContent);
