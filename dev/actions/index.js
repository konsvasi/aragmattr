export function selectSession(aragmatiki) {
  return {
    type: 'SESSION_SELECTED',
    payLoad: aragmatiki
  }
}

export function createSession() {
  return {
    type: 'CREATE_SESSION',
    newSession: true
  }
}
