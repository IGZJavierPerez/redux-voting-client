import React from 'react';
import Router, {Route, Redirect} from 'react-router';
import { Provider } from 'react-redux';
import App from './views/App';
import UhOh from './views/404';
import { VotingContainer } from './views/Voting';
import { ResultsContainer } from './views/Results';
import configureStore from './store/configure-store';

require('./scss/main.scss');

const store = configureStore();

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
