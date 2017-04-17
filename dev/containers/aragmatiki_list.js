import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSession} from '../actions/index';
import { bindActionCreators } from 'redux';

class Aragmatikes extends Component {
  renderList() {
    return this.props.aragmatikes.map((aragmatiki) => {
      return (
          <li className="list-group-item"
            key={aragmatiki.name}
            onClick ={()=>this.props.selectSession(aragmatiki)}>
            {aragmatiki.name}
          </li>
      )
    })
  }

  render() {
    return(
      <ol className="aragmatikes">
        {this.renderList()}
      </ol>
    )
  }
}

function mapStateToProps(state) {
  return {
    aragmatikes: state.aragmatikes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectSession: selectSession}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Aragmatikes);
