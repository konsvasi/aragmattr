export function selectSession(aragmatiki) {
  return {
    type: 'SESSION_SELECTED',
    payLoad: aragmatiki
  }
}

export function createSession(name, location) {
  console.log('AM I HERE?');
  return {
    type: 'CREATE_SESSION',
    payload: {name: name, location: location}
  }
}
