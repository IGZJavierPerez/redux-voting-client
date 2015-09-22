import reducer from '../reducers';
import { setState } from '../actions/action-creators';
import { createStore, applyMiddleware } from 'redux';
import logMiddleware from '../middleware/log-middleware';
import Firebase from 'firebase';
import { firebaseUrl } from '../util/constants';
import firebaseActionMiddleware from '../middleware/firebase-action-middleware';

const baseRef = new Firebase(firebaseUrl);
const pollRef = baseRef.child('poll');

const createStoreWithMiddleware = applyMiddleware(
  firebaseActionMiddleware(pollRef), logMiddleware
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);

  pollRef.on('value', pollObj => store.dispatch(setState(pollObj.val())));

  return store;
}
