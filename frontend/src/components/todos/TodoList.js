import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTodos, deleteTodo, toggleTodo } from '../../actions/todos';

class TodoList extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    return (
     
  <table className="ui celled table">
      <thead>
          <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description </th>
              <th>Done</th> 
              <th>Actions</th>
              </tr>
              </thead>
              <tbody  >
              {this.props.todos.map(todo => (
                  <tr key={todo.id}>
                      <td>{todo.id}</td>
                      <td>{todo.title}</td>
                      <td>{todo.description}</td>
                      <td> <input type='checkbox' onChange={() => this.props.toggleTodo(todo.id, todo)} defaultChecked={todo.done} />
                      </td> 
                     <td>
                     <Link to={`/edit/${todo.id}`} className="ui blue basic button "> Edit  </Link> 

                     <Link to={`/delete/${todo.id}`} className="ui red basic button " >  Delete </Link>

                     </td>
                      </tr>
                      ))}
                       </tbody>
                       </table>
   
        
      
    );
  }
}

const mapStateToProps = state => ({
  todos: Object.values(state.todos)
});

export default connect(
  mapStateToProps,
  { getTodos, deleteTodo, toggleTodo  }
)(TodoList);