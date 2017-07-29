import React, { Component } from 'react';
import MainBar from './main_bar';
import Aragmatikes from '../containers/aragmatiki_list';
import AragmatikiContent from '../containers/aragmatiki_content';
import EmptySession from '../containers/empty_session';

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MainBar />
        <Aragmatikes />
        <AragmatikiContent />
      </div>
    )
  }
}

export default Container;
