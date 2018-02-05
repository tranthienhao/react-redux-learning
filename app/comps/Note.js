import React from 'react';
import {connect} from 'react-redux';
import {delItem} from 'action';
class Note extends React.Component{
  del(){
    var {index, dispatch} = this.props; // lay bien co ten index trong props va cho vao mot bien moi co ten index
    dispatch(delItem(index));
  }
  render(){
    return (
      <div>
        <h2>{this.props.children}</h2>
        <button onClick= {this.del.bind(this)}>Delete</button>
      </div>
    );
  }
}

module.exports = connect()(Note);
