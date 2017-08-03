import { combineReducers } from 'redux';
import AddSessionReducer from './reducer_add_session';
import ActiveSessionReducer from './reducer_active_session';

const rootReducer = combineReducers({
  addSession: AddSessionReducer,
  activeSession: ActiveSessionReducer
})

export default rootReducer;
