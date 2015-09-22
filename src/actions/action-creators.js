import * as ActionTypes from './index';

export function setClientId(clientId) {
  return {
    type: ActionTypes.SET_CLIENT_ID,
    clientId
  };
}

export function setConnectionState(state, connected) {
  return {
    type: ActionTypes.SET_CONNECTION_STATE,
    state,
    connected
  };
}

export function setState(state) {
  return {
    type: ActionTypes.SET_STATE,
    state
  };
}

export function vote(entry) {
  return {
    type: ActionTypes.VOTE,
    firebase: {
      preFn: (baseRef) => baseRef.child('vote/tally/' + entry).transaction(curr => (curr || 0) + 1)
    }
  };
}

export function next() {
  return {
    meta: {remote: true},
    type: ActionTypes.NEXT,
    firebase: {
      postFn: (baseRef) => baseRef.set.bind(baseRef)
    }
  };
}

export function restart() {
  return {
    meta: {remote: true},
    type: ActionTypes.RESTART
  };
}
