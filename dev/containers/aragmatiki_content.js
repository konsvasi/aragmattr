import React, { Component} from 'react';
import {connect} from 'react-redux';


class AragmatikiContent extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if (!this.props.aragmatiki) {
      return (
        <div className="aragmatikiContent">
              <h2 className="content-style">Select a session</h2>
        </div>
      )
    }

    return(
      <div className="aragmatikiContent">
        <h1 className="content-style">Name:{this.props.aragmatiki.name}</h1>
        <h2 className="content-style">Location:{this.props.aragmatiki.location}</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    aragmatiki: state.activeSession
  }
}

export default connect(mapStateToProps)(AragmatikiContent);
