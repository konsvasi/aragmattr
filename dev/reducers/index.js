import { combineReducers } from 'redux';
import AragmatikesReducer from './reducer_aragmatikes';
import ActiveSessionReducer from './reducer_active_session';
import CreateSessionReducer from './reducer_create_session';
import AddSessionReducer from './reducer_add_session';

// const rootReducer = combineReducers({
//   aragmatikes: AragmatikesReducer,
//   activeSession: ActiveSessionReducer,
//   newSession: CreateSessionReducer,
//   addSession: AddSessionReducer
// });

const rootReducer = combineReducers({
  addSession: AddSessionReducer
})

export default rootReducer;
