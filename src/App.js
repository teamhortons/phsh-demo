import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import createStore from './state/store';
import Demo from './Demo';
import PaypalDemo from './PaypalDemo';
import history from './history';
import './rbc/RbcModal.css';
import './paypal/PaypalModal.css';

const App = () => (
  <Provider store={createStore()}>
      <Router history={history}>
        <Switch>
          {/* <Route path='/login'>
            <Demo />
          </Route> */}
          <Route>
            <PaypalDemo />
          </Route>
        </Switch>
      </Router>
  </Provider>
);

export default App;
