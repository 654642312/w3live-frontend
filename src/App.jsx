import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import AboutTeamDevelopment from './views/aboutTeamDevelopment';
import HomePage from './views/homepage';
import News from './views/news';
import Replays from './views/replays';
import ErrorPage from './views/errorPage';
import NavBar from './components/navbar';
import Footer from './components/footer';
import AOS from 'aos';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom:'18rem'
  },
}));

function App() {

  const classes = useStyles();

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, []);

  return (
      <div className={ classes.root }>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/aboutteam' component={AboutTeamDevelopment} />
          <Route exact path='/news' component={News} />
          <Route exact path='/replays' component={Replays} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </div>
  );
}

export default App;
