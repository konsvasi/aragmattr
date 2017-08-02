import initialState from './initialState';

export default (state = initialState, action) => {
  console.log('state:', state, 'action:', action);
  switch(action.type) {
    case 'CREATE_SESSION':
      const newState = action.payload.newSession;
      return newState;
    default:
      return state;
  }
}
