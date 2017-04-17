import { combineReducers } from 'redux';
import Aragmatikes from './reducer_aragmatikes';
import ActiveSession from './reducer_active_session';

const rootReducer = combineReducers({
  aragmatikes: Aragmatikes,
  activeSession: ActiveSession
});

export default rootReducer;
