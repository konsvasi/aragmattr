import React, { Component } from 'react';
import { connect } from 'react-redux';
import randomString from 'randomstring';

class EmptySession extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      location: ''
    }

    this.handleNameChange = (ev) => {
      this.setState({name: ev.target.value});
    }

    this.handleLocationChange = (ev) => {
      this.setState({location: ev.target.value});
    }

    this.handleSubmit = (ev) => {
      ev.preventDefault();
      this.props.handleSubmit(this.state.name, this.state.location);
      this.setState({name: ''});
      this.setState({location: ''});
    }
  }

  render() {
    return (
      <div className="aragmatikiContent">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text"  value={this.state.name} className="form-control" id="name" onChange = {this.handleNameChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input type="text" value={this.state.location} className="form-control" id="location" onChange = {this.handleLocationChange}/>
          </div>
          <button type="submit" className="btn btn-default" >Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      handleSubmit: (name, location) => {
      dispatch({
        type: 'ADD_SESSION',
        payload: {aragmatiki: { name: name, location: location, id: randomString.generate({length: 5, charset: 'alphanumeric'}) }, newSession: false}
      });
    }
  }
}

export default connect(undefined, mapDispatchToProps)(EmptySession);
