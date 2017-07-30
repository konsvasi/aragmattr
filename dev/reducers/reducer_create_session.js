import initialState from './initialState';

export default (state = initialState, action) => {
  // console.log('reducer CREATE_SESSION', state.aragmatikes, action);
  switch(action.type) {
    case 'CREATE_SESSION':
      let newSessionValue = action.newSession;
      let newState = { aragmatikes: [...state.aragmatikes], newSession: newSessionValue};
      console.log('oldState:', state, 'newState:', newState);
      return newState;
    default:
      return state;
  }
}
