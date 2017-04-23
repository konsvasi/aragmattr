export function selectSession(aragmatiki) {
  return {
    type: 'SESSION_SELECTED',
    payLoad: aragmatiki
  }
}

export function createSession() {
  console.log('CREATING SESSION');
  return {
    type: 'CREATE_SESSION',
    payload: {name: '', location: ''}
  }
}
