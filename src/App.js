import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import createStore from './state/store';
import Demo from './Demo';
import history from './history';
import './Modal.css';


const App = () => (
  <Provider store={createStore()}>
      <Router history={history}>
        <Switch>
          <Route>
            <Demo />
          </Route>
        </Switch>
      </Router>
  </Provider>
);

export default App;
