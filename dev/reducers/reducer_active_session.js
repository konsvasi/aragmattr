import initialState from './initialState';

export default function(state = initialState, action) {
  switch(action.type) {
    case 'SESSION_SELECTED':
      const newState =  Object.assign({}, state, { aragmatikes: [...state.aragmatikes], newSession: action.payload.newSession});
      return newState;
    default:
      return state
  }
}
