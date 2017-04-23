import { combineReducers } from 'redux';
import Aragmatikes from './reducer_aragmatikes';
import ActiveSession from './reducer_active_session';
import NewSession from './reducer_newSession';

const rootReducer = combineReducers({
  aragmatikes: Aragmatikes,
  activeSession: ActiveSession,
  newSession: NewSession
});

export default rootReducer;
