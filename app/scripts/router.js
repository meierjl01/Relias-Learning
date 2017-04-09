import React from 'react';
import { Route, Router, browserHistory } from 'react-router';

import Home from './components/containers/home';

const router = (
  <Router history = {browserHistory}>
    <Route path = "/" component = {Home} />
  </Router>
);

export default router;
