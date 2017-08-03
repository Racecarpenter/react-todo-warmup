import React, {Component} from 'react';


class TodoList extends Component {

  childAddTodo() {
  console.log('yo', this.refs.thetodovalue.value)
  this.props.addTodoFunc({
    task: this.refs.thetodovalue.value
  });
}
  childChangeStatus(e) {
    e.preventDefault();
    this.props.changeStatusFunk({
      complete: this.refs.complete.value
    })
  }
  render() {
    let thetodolist = [
      this.props.thetodos.map((todo, index) => <li key={index}> {todo.task} </li>),
    <select onChange={this.childChangeStatus.bind(this)} ref="complete">
      <option value="Not Done">Not Done</option>
      <option value="Done">Done</option>
      </select>]
    return (
      <div>
      {thetodolist}
      </div>
    )
  }
}


export default TodoList
