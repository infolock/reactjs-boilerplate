import React from 'react';
import { Route, IndexRoute } from 'react-router';

import MainContainer from '../App';
import HomeContainer from '../containers/home/';
// ...
// Other top-level parent containers go here...
// ...

const AppRouter = (
  <Route path="/" component={ MainContainer }>
      <IndexRoute component={ HomeContainer } />
      <Route path="/home" component={ HomeContainer } />
  </Route>
);

export default AppRouter;
