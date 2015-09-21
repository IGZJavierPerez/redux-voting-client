import React from 'react';
import {RouteHandler} from 'react-router';
import {ConnectionStateContainer} from './ConnectionState';
import MainNavbar from './MainNavbar';

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
