import React, { Component } from 'react';
import { connect } from 'react-redux';
import bindActionCreators from 'redux';

import AragmatikiContent from './aragmatiki_content';
import EmptySession from './empty_session';

class MainScreen extends Component {
  constructor(props) {
    super(props);
  }

  showContent() {
    //console.log('this.props.newSession:', this);
    if(this.props.newSession) {
      return <EmptySession />
    }
    return <AragmatikiContent />
  }

  render() {
    return (
      <div>
        {this.showContent()}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    //newSession is the name of the reducer
    newSession: state.newSession.newSession
  };
}

export default connect(mapStateToProps)(MainScreen);