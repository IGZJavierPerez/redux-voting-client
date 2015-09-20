import React from 'react/addons';

const Link = require('react-router').Link;

const uhOh = React.createClass({
  render() {
    return (
      <div className="full-width">
        <h1>{ 'That Page Doesn\'t Exist' }</h1>
        <p><Link to="/">Return to the homepage</Link></p>
      </div>
    );
  }
});

export default uhOh;
