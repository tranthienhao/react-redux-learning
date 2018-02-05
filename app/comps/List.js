import React from 'react';
import Note from 'Note';
import NoteForm from 'NoteForm';
import {connect} from 'react-redux';

class List extends React.Component{
  render(){
    return (
      <div>
        <NoteForm addFunc= {this.addNote}/>
        {this.props.mang.map((value, index)=> {
          return <Note key= {index} index= {index}>{value}</Note>
        })}
      </div>
    );
  }
}

module.exports = connect(function(state){ //state la state trong store
  return {mang: state.mang} // lay cac state cua store tao thanh props cua List
})(List);
