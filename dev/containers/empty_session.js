import React, { Component } from 'react';

class EmptySession extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" name="name" />
          <input type="text" name="location" />
        </form>
      </div>
    )
  }
}

export default EmptySession;
