import React from 'react';
import {connect} from 'react-redux';
import {addItem, toogleIsAdding} from 'action';

class NoteForm extends React.Component{
  add(e){
    e.preventDefault();
    var{dispatch} = this.props;
    dispatch(addItem(this.refs.txt.value));
    dispatch(toogleIsAdding());
    this.refs.txt.value = '';
  }
  showAddForm(){
    var {dispatch} = this.props;// tat ca cac com trong Com Provider duoc thua huong dispatch
    dispatch(toogleIsAdding());
  }
  render(){
    if(this.props.isAdding){
      return(
        <form onSubmit= {this.add.bind(this)}>
          <input type="text" ref ="txt" placeholder="Input Your Note!"></input>
          <button>Add</button>
        </form>
      );
    }
    else{
      return (
        <div>
          <button onClick= {this.showAddForm.bind(this)}>+</button>
        </div>
      );
    }
  }
}

module.exports = connect(function(state){
  return {
    isAdding: state.isAdding
  }
})(NoteForm);
