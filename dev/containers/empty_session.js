import React, { Component } from 'react';

class EmptySession extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="emptySession">
        <h1>Create new session</h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EmptySession;
