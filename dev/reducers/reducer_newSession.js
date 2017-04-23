export default function(state = null, action) {
  switch (action.type) {
    case 'CREATE_SESSION':
      console.log('state', state);
      return [{name: action.payload.name, location: action.payload.location}, ...state];
  }

  return state;
}
