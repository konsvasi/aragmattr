import React, { Component } from 'react';
import { connect } from 'react-redux';

import AragmatikiContent from './aragmatiki_content';
import EmptySession from './empty_session';

class MainScreen extends Component {
  constructor(props) {
    super(props);
  }

  showContent() {
    if(this.props.addSession) {
      return <EmptySession />
    }
    return <AragmatikiContent />
  }

  render() {
    return (
      <div className="col-md-9">
        {this.showContent()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    addSession: state.addSession.newSession
  }
}

export default connect(mapStateToProps, null)(MainScreen);
