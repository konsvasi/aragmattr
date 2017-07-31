export function selectSession(aragmatiki) {
  return {
    type: 'SESSION_SELECTED',
    payLoad: { aragmatikes: aragmatiki, newSession: false }
  }
}

export function createSession() {
  return {
    type: 'CREATE_SESSION',
    payload: {
      newSession: true
    }
  }
}
