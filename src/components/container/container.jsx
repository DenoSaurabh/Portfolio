import React from 'react';

import './container.styles.scss';

import NavBar from '../navbar/navbar.component';

const Container = ({ children, className }) => (
  <div className="container">
    <NavBar />
    <div className={`content ${className}`}>
        {children}
    </div>
  </div>
);



export default Container;
