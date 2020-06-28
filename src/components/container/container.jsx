import React from 'react';

import './container.styles.scss';

import NavBar from '../navbar/navbar.component';

const Container = ({ children, className }) => (
  <div classname={`container ${className}`}>
    <NavBar />
    <div className="content">
        {children}
    </div>
  </div>
);



export default Container;
