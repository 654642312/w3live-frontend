import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutTeamDevelopment from './views/aboutTeamDevelopment';
import HomePage from './views/homepage';
import News from './views/news';
import Replays from './views/replays';
import ErrorPage from './views/errorPage';

import NavBar from './components/navbar';


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/aboutteam' component={AboutTeamDevelopment} />
        <Route exact path='/news' component={News} />
        <Route exact path='/replays' component={Replays} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
