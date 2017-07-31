import initialState from './initialState';

export default (state = initialState, action) => {
  debugger;
  switch(action.type) {
    case 'ADD_SESSION':
      const newState = Object.assign({}, state, { aragmatikes: [...state.aragmatikes,
        {name: action.payload.name, location: action.payload.location}]});
      return newState;
    default:
      return state;
  }

  return state;
}
