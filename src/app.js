import React from 'react';

import './app.scss';

import GlobalStyle from './styledComponents/globalStyles';

import NavBar from './components/navbar/navbar.component.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <GlobalStyle />
        <NavBar />
      </div>
    );
  }
}

export default App;
