import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './app.css'

import GlobalStyle from './styledComponents/globalStyles';

import HomePage from './pages/homepage/homepage.component.jsx'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <GlobalStyle />
        <Switch>
          <Route exact path="/home" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
