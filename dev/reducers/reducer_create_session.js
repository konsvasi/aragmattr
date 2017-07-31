import initialState from './initialState';

export default (state = initialState, action) => {
  switch(action.type) {
    case 'CREATE_SESSION':
      const newSessionValue = action.payload.newSession;
      const newState = { aragmatikes: [...state.aragmatikes], newSession: newSessionValue};
      return newState;
    default:
      return state;
  }
}
