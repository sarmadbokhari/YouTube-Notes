import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.js';
import Notes from './pages/Notes.js';

export default (
  <div>
    <Route path="/" component={App} />
    <Route path="/notes" component={Notes} />
  </div>
)
