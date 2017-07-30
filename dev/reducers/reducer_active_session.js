import initialState from './initialState';

export default function(state = initialState, action) {
  console.log('click', state, action);
  switch(action.type) {
    case 'SESSION_SELECTED':
      return action.payLoad;
  }

  return state;
}
