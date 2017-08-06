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

    if (this.props.id !== null) {
      const aragmatiki = this.props.aragmatikes.find(session => {
        console.log('session:', session);
        return session.id === this.props.id.id;
      })
      console.log('selected aragmatiki:', aragmatiki);
      return(
        <div className="aragmatikiContent">
          <h1 className="content-style">Name:{aragmatiki.name}</h1>
          <h2 className="content-style">Location:{aragmatiki.location}</h2>
        </div>
      );
    } else {
      return(
        <div className="aragmatikiContent">
          <h1 className="content-style">Name:{this.props.aragmatikes[0].name}</h1>
          <h2 className="content-style">Location:{this.props.aragmatikes[0].location}</h2>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    id: state.activeSession,
    aragmatikes: state.addSession.aragmatikes
  }
}

export default connect(mapStateToProps)(AragmatikiContent);
