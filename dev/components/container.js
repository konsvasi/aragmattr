import React, { Component } from 'react';
import MainBar from './main_bar';
import Aragmatikes from './aragmatiki_list';
import AragmatikiContent from './aragmatiki_content';

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
