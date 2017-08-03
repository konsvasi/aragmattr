import initialState from './initialState';

export default function(state = initialState, action) {
  switch(action.type) {
    case 'SESSION_SELECTED':
      let newState = state;
      newState = action.payload.id;
      return newState
    default:
      return state
  }
}
