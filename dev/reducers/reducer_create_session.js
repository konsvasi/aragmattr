import initialState from './initialState';

export default (state = initialState, action) => {
  console.log('reducer CREATE_SESSION', state, action.type);
  switch(action.type) {
    case 'CREATE_SESSION':
      return state = [...state, {name: '', location: '', newSession: action.newSession}];
    default:
      return state;
  }
}
