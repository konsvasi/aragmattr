import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

export default function configureStore() {
  return createStore(rootReducer, initialState);
}
