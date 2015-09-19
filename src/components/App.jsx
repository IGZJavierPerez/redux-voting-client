import React from 'react/addons';
import {RouteHandler} from 'react-router';
import {ConnectionStateContainer} from './ConnectionState';
import MainNavbar from './MainNavbar';

export default React.createClass({
  render: function() {
    return <div>
      <MainNavbar />
      <div classname="main">
        <ConnectionStateContainer />
        <RouteHandler />
      </div>
    </div>
  }
});
