import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './app.scss'

import HomePage from './pages/homepage/homepage.component'
import AboutPage from './pages/aboutpage/about.component'
import SkillsPage from './pages/skillspage/skills.component'
import BlogsPage from './pages/blogs/blogs.component' 

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/skills" component={SkillsPage} />
          <Route exact path="/blogs" component={BlogsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
