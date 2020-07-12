import React from 'react';
import {Link} from 'react-router-dom';

import './navbar.styles.scss';

const NavBar = () => (
  <div className="navbar">
    <h6 className="tertiary-heading"><Link to="/home">home</ Link></h6>
    <h6 className="tertiary-heading"><Link to="/about">about</ Link></h6>
    <h6 className="tertiary-heading"><Link to="/skills">skills</ Link></h6>
    <h6 className="tertiary-heading"><Link to="/blogs">blogs</ Link></h6>
    <h6 className="tertiary-heading"><a href="mailto:saurabh.fullstackdev@outlook.com">contact</a></h6>
  </div>
);

export default NavBar;
