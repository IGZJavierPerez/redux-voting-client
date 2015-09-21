import io from 'socket.io-client';
import reducer from '../reducers';
import getClientId from '../util/client-id';
import { setClientId, setState, setConnectionState } from '../actions/action-creators';
import { createStore, applyMiddleware } from 'redux';
import remoteActionMiddleware from '../middleware/remote-action-middleware';

const socket = io(`${location.protocol}//${location.hostname}:8090`);

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);
  socket.on('state', state =>
    store.dispatch(setState(state))
  );
  [
    'connect',
    'connect_error',
    'connect_timeout',
    'reconnect',
    'reconnecting',
    'reconnect_error',
    'reconnect_failed'
  ].forEach(ev =>
    socket.on(ev, () => store.dispatch(setConnectionState(ev, socket.connected)))
  );
  store.dispatch(setClientId(getClientId()));
  return store;
}
