import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainPage } from './pages';

const App = () => {
  return (
    <div id="app">
      <Switch>
        <Route exact path="/mainPage" component={MainPage} />
      </Switch>
    </div>
  );
};
export default App;
