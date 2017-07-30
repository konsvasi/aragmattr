import { combineReducers } from 'redux';
import Aragmatikes from './reducer_aragmatikes';
import ActiveSession from './reducer_active_session';
import EmptySession from './reducer_create_session';
import AddSession from './reducer_add_session';

const rootReducer = combineReducers({
  aragmatikes: Aragmatikes,
  activeSession: ActiveSession,
  createSession: EmptySession,
  addSession: AddSession
});

export default rootReducer;
