import React from 'react';

import './navbar.styles.scss';

import { TertiaryHeading } from '../../styledComponents/typography';

const NavBar = () => (
  <div className="navbar">
    <TertiaryHeading>Home</TertiaryHeading>
    <TertiaryHeading>About</TertiaryHeading>
    <TertiaryHeading>Skills</TertiaryHeading>
    <TertiaryHeading>Projects</TertiaryHeading>
    <TertiaryHeading>Blogs</TertiaryHeading>
  </div>
);

export default NavBar;
