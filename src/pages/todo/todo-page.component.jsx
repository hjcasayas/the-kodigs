import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import { TodoList } from '../../components/todo-list';
import { TodoForm } from '../../components/todo-form';
import { addTodo, deleteTodo } from '../../redux/todos/todos.actions.js';

import './todo-page.styles.scss';

class TodoPage extends PureComponent {
  handleAddTodo = (e, inputValue) => {
    e.preventDefault();
    if (typeof inputValue !== 'string' || inputValue.trim() === '') {
      return;
    }
    this.props.addTodo(inputValue);
  };

  handleDeleteTodo = e => {
    const id = +e.currentTarget.getAttribute('data-id');
    this.props.deleteTodo(id);
  };

  render() {
    console.log(this.props);
    return (
      <div className='page todo-page'>
        <Card className='todo-page__card'>
          <div className='todo-page__form'>
            <TodoForm addTodo={this.handleAddTodo} />
          </div>
          <div className='todo-page__list'>
            <TodoList
              todos={this.props.todos}
              deleteTodo={this.handleDeleteTodo}
            />
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({ todos: state.todos });

const mapDispatchToProps = { addTodo, deleteTodo };

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
