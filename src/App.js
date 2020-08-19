import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { MainPage } from './pages';

const App = () => {
  return (
    <div id="app">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/mainPage" component={MainPage} />
      </Switch>
    </div>
  );
};
export default App;
