import initialState from './initialState';

export default function(state = initialState, action) {
  console.log('SESSION_SELECTED', state, action);
  switch(action.type) {
    case 'SESSION_SELECTED':
      const newState =  Object.assign({}, state, { aragmatikes: [...state.aragmatikes], newSession: action.payload.newSession});
      return newState;
    default:
      return state
  }
}
