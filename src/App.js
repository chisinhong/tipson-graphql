import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Search from './containers/Search';
import Ranking from './containers/Ranking';
import Profile from './containers/Profile';
import History from './containers/History';
import Landing from './containers/Landing';
import Error from './containers/Error';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/search' component={Search} />
          <Route path='/ranking' component={Ranking} />
          <Route path='/profile' component={Profile} />
          <Route path='/History' component={History} />
          <Route path='/' component={Landing} exact />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
