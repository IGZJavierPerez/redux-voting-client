import React from 'react';
import { RouteHandler } from 'react-router';
import { ConnectionStateContainer } from '../components/ConnectionState';
import MainNavbar from '../components//MainNavbar';

export default React.createClass({
  render: function() {
    return ( <div>
      <MainNavbar />
      <div className="main">
        <ConnectionStateContainer />
        <RouteHandler />
      </div>
    </div> );
  }
});
