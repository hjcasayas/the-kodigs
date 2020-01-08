import { ADD_TODO, DELETE_TODO } from './todos.constants';

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          todo: action.payload.todo,
          id: action.payload.id
        }
      ];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);

    default:
      return state;
  }
};

export default todosReducer;
