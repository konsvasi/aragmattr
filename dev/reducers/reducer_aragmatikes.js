import initialState from './initialState';

export default function(state = initialState) {
  console.log('list and state:', state);
  return state;
}
