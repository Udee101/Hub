import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Chat from './components/Chat';
import Feed from './components/Feed';
import Join from './components/Join';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/chat" component={Chat} />
        <Route path="/feed" component={Feed} />
        <Route exact path="/" component={Join} />
      </Switch>
    </Router>
  );
};

export default App;
