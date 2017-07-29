import React, { Component } from 'react';
import {createSession} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      name: '',
      location: '',
      date: ''
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.onNameChange = (event) => {
      this.setState({name: event.target.value});
    }

    this.onLocationChange = (event) => {
      this.setState({location: event.target.value});
    }

    this.onFormSubmit = (event) => {
      event.preventDefault();

      this.setState({modalIsOpen: false});
      createSession(this.state.name, this.state.location);
      console.log('submitted!!!', this.state);
    }
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal} className="addButton btn btn-default">+</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          style={customStyles}
          onRequestClose={this.closeModal}
          contentLabel="Info for new session"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>Create a new session</h2>
          <form onSubmit={this.onFormSubmit} className="input-group">
            <input
              placeholder="Give your aragmatiki a name"
              className="form-control"
              value={this.state.name}
              onChange={this.onNameChange}
              required
            />
          <input
            placeholder="Where is it taking place?"
            className="form-control"
            value={this.state.location}
            onChange={this.onLocationChange}
            required
          />
              <button type="submit" className="btn btn-secondary">Submit</button>
          </form>
        </Modal>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createSession: createSession}, dispatch);
}

function mapStateToProps(state) {
  return {
    name: state.name,
    location: state.location
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);
