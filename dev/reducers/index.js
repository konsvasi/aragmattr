import { combineReducers } from 'redux';
import Aragmatikes from './reducer_aragmatikes';
import ActiveSession from './reducer_active_session';
import EmptySession from './reducer_create_session';

const rootReducer = combineReducers({
  aragmatikes: Aragmatikes,
  activeSession: ActiveSession,
  createSession: EmptySession

});

export default rootReducer;
