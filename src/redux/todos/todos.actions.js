import { ADD_TODO, DELETE_TODO } from './todos.constants';

let nextId = 0;

const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: {
      id: (nextId += 1),
      todo
    }
  };
};

const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: { id }
  };
};

export { addTodo, deleteTodo };
