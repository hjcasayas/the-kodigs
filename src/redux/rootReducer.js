import { combineReducers } from 'redux';

import counterReducer from './counter/counter.reducer';
import todosReducer from './todos/todos.reducer';

const rootReducer = combineReducers({
  count: counterReducer,
  todos: todosReducer
});

export default rootReducer;
