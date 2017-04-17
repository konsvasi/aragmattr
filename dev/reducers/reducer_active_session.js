export default function(state = null, action) {
  console.log('click', state, action);
  switch(action.type) {
    case 'SESSION_SELECTED':
      return action.payLoad;
  }

  return state;
}
