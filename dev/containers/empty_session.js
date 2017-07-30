import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmptySession extends Component {
  constructor(props) {
    super(props);

    this.handleNameChange = (ev) => {
      console.log('name:', ev.target.value);
      // this.setState({name: ev.target.value});
      this.name = ev.target.value;
    }

    this.handleLocationChange = (ev) => {
      console.log('location:', ev.target.value)
      // this.setState({location: ev.target.value});
      this.location = ev.target.value;
    }
  }

  render() {
    return (
      <div className="aragmatikiContent">
        <form onSubmit= {this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" onChange = {this.handleNameChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input type="text" className="form-control" id="location" onChange = {this.handleLocationChange}/>
          </div>
          <button type="submit" className="btn btn-default" onSubmit= {this.props.handleSubmit(this.name, this.location)}>Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      handleSubmit: (name, location) => {
        console.log('blalb');
      dispatch({
        type: 'ADD_SESSION',
        payload: {name: name, location: location}
      });
    }
  }
}

export default connect(undefined, mapDispatchToProps)(EmptySession);
