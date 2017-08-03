import { combineReducers } from 'redux';
import AddSessionReducer from './reducer_add_session';

const rootReducer = combineReducers({
  addSession: AddSessionReducer
})

export default rootReducer;
