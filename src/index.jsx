import React from 'react';
import Router, {Route, Redirect} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import reducer from './reducer';
import {setClientId, setState, setConnectionState} from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';
import getClientId from './client_id';
import App from './components/App';
import UhOh from './components/404';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';

require('./scss/main.scss');

const socket = io(`${location.protocol}//${location.hostname}:8090`);

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);

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

const routes = ( <Route handler={App}>
  <Route path="/results" handler={ResultsContainer} />
  <Route path="/voting" handler={VotingContainer} />
  <Route name="404" path="/404" handler={ UhOh } />
  {/* Redirects */}
  <Redirect from="/" to="/voting" />
  <Redirect from="*" to="/404" />
</Route> );

Router.run(routes, (Root) => {
  React.render(
    <Provider store={store}>
      {() => <Root />}
    </Provider>,
    document.getElementById('app')
  );

});
