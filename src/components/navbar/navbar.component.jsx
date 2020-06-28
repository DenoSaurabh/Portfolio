import React from 'react';
import {Link} from 'react-router-dom';

import './navbar.styles.scss';

import { TertiaryHeading } from '../../styledComponents/typography';

const NavBar = () => (
  <div className="navbar">
    <TertiaryHeading><Link to="/home">Home</ Link></TertiaryHeading>
    <TertiaryHeading><Link to="/about">About</ Link></TertiaryHeading>
    <TertiaryHeading><Link to="/skills">Skills</ Link></TertiaryHeading>
    <TertiaryHeading><Link to="/projects">Projects</ Link></TertiaryHeading>
    <TertiaryHeading><Link to="/blogs">Blogs</ Link></TertiaryHeading>
  </div>
);

export default NavBar;
