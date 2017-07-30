import initialState from './initialState';

export default (state = initialState, action) => {
  console.log('ADD_SESSION', state, action);
  switch(action.type) {
    case 'ADD_SESSION':
      console.log('state:', state);
      return state;
    default:
      return state;
  }
}
