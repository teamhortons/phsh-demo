import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import createStore from './state/store';
import Demo from './Demo';
import TdDemo from './TdDemo';
import history from './history';
import './rbc/RbcModal.css';
import './td/TdModal.css';

const App = () => (
  <Provider store={createStore()}>
      <Router history={history}>
        <Switch>
          <Route>
            <Demo />
          </Route>
          {/* <Route path='/paypal'>
            <PaypalDemo />
          </Route> */}
        </Switch>
      </Router>
  </Provider>
);

export default App;
