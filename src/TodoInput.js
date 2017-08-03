import React, { Component } from 'react';

class TodoInput extends Component {
    childAddTodo() {
    console.log('yo', this.refs.thetodovalue.value)
    this.props.addTodoFunc({
      task: this.refs.thetodovalue.value
    });
  }

  render () {
    return (
      <div>
        <input type="text" ref="thetodovalue" placeholder="Title"/>
        <button onClick={this.childAddTodo.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default TodoInput;
