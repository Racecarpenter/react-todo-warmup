import React, { Component } from 'react';

class TodoInput extends Component {

  childAddTodo() {
    this.props.addTodoFunc(this.refs.thetodovalue.value);
  }

  render () {
    return (
      <div>
        <input type="text" ref="title" />
        <input type="text" ref="description" />
        <select ref="complete">
          <option value="done">Done</option>
          <option value="not done">Not Done</option>
          </select>
        <button onClick={this.childAddTodo.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default TodoInput;
