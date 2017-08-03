import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          task: 'Make The WarmUp Work',
          complete: "Not Done"
        },
        {
          task: 'sit and wait for death',
          complete: "Done"
        }
      ]
    }
  }

  addTodo(todo, e) {
    this.setState({
      todos: this.state.todos.concat({
        task:todo,
        complete: "Not Done"
      })
    })
  }

    changeStatus(todo, e) {
      this.setState({
        todos: this.state.todos.concat({
        complete: todo.complete
      })
    })
  }
  render() {
    let container = {
      color: 'white',
      backgroundColor: 'grey',
      textAlign: 'center',
      fontSize: 30,
      height: 300,
      width: 500,
      overflowY: 'scroll',
      margin: '0px auto'
    }
    return (
      <div style={container}>
      <TodoInput addTodoFunc={this.addTodo.bind(this)}/>
        <TodoList thetodos={this.state.todos} changeStatusFunk={this.changeStatus.bind(this)}/>
      </div>
    );
  }
}

export default App;
