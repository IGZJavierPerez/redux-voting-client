import React from 'react/addons';
import {Link} from 'react-router';
import { Navbar, Nav, NavItem, CollapsibleNav} from 'react-bootstrap';

const MainNavbar = React.createClass({
    render() {
        return (
        <Navbar className="navbar" toggleNavKey={0}>
          <CollapsibleNav eventKey={0}>
            <Nav navbar right>
              <NavItem eventKey={1} href="#/voting">Voting</NavItem>
              <NavItem eventKey={2} href="#/results">Results</NavItem>
            </Nav>
          </CollapsibleNav>
        </Navbar>
        );
    }
});

export default MainNavbar;
