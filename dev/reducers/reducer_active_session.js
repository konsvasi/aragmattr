export default function(state = null, action) {
  switch(action.type) {
    case 'SESSION_SELECTED':
      console.log('action.payload', action.payLoad);
      return action.payLoad;
  }

  return state;
}
