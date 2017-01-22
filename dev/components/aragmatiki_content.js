import React, { Component} from 'react';

class AragmatikiContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="aragmatikiContent">
        <h1 className="content-style" id="content-title">Name: Aragmatiki</h1>
        <h2 className="content-style" id="content-date">Date: 04/20/17</h2>
        <h2 className="content-style" id="content-location">Location: Mpountroumi</h2>
      </div>
    )
  }
}

export default AragmatikiContent;
