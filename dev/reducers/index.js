import { combineReducers } from 'redux';
import AddSessionReducer from './reducer_add_session';
import ActiveSessionReducer from './reducer_active_session';
import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
  addSession: AddSessionReducer,
  activeSession: ActiveSessionReducer,
  auth: AuthReducer
})

export default rootReducer;
