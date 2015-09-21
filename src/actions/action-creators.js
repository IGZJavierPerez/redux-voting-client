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
    meta: {remote: true},
    type: ActionTypes.VOTE,
    entry
  };
}

export function next() {
  return {
    meta: {remote: true},
    type: ActionTypes.NEXT
  };
}

export function restart() {
  return {
    meta: {remote: true},
    type: ActionTypes.RESTART
  };
}
