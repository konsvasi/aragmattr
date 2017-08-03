import initialState from './initialState';

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_SESSION':
      console.log('state', state);
      if (action.payload.aragmatiki) {
        return Object.assign({}, state, {aragmatikes: [action.payload.aragmatiki, ...state.aragmatikes],
          newSession: false, addSession: true});
      } else {
        return Object.assign({}, state, {aragmatikes: [...state.aragmatikes],
          newSession: true, addSession: true});
      }
    default:
      return state;
  }
}
